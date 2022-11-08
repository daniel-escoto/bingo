import type { EditContestById, UpdateContestInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ContestForm from 'src/components/Admin/Contest/ContestForm'

export const QUERY = gql`
  query EditContestById($id: Int!) {
    contest: contest(id: $id) {
      id
      name
      textWord
      maxEntries
      numWinners
      loserGets
      startDate
      endDate
      enterMsg
      winnerMsg
      loserMsg
    }
  }
`
const UPDATE_CONTEST_MUTATION = gql`
  mutation UpdateContestMutation($id: Int!, $input: UpdateContestInput!) {
    updateContest(id: $id, input: $input) {
      id
      name
      textWord
      maxEntries
      numWinners
      loserGets
      startDate
      endDate
      enterMsg
      winnerMsg
      loserMsg
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ contest }: CellSuccessProps<EditContestById>) => {
  const [updateContest, { loading, error }] = useMutation(
    UPDATE_CONTEST_MUTATION,
    {
      onCompleted: () => {
        toast.success('Contest updated')
        navigate(routes.adminContests())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateContestInput,
    id: EditContestById['contest']['id']
  ) => {
    updateContest({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Contest {contest?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ContestForm contest={contest} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}

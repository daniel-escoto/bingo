import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ContestForm from 'src/components/Admin/Contest/ContestForm'

import type { CreateContestInput } from 'types/graphql'

const CREATE_CONTEST_MUTATION = gql`
  mutation CreateContestMutation($input: CreateContestInput!) {
    createContest(input: $input) {
      id
    }
  }
`

const NewContest = () => {
  const [createContest, { loading, error }] = useMutation(
    CREATE_CONTEST_MUTATION,
    {
      onCompleted: () => {
        toast.success('Contest created')
        navigate(routes.adminContests())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateContestInput) => {
    createContest({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Contest</h2>
      </header>
      <div className="rw-segment-main">
        <ContestForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewContest

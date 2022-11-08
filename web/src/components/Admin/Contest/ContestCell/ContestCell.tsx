import type { FindContestById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Contest from 'src/components/Admin/Contest/Contest'

export const QUERY = gql`
  query FindContestById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Contest not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ contest }: CellSuccessProps<FindContestById>) => {
  return <Contest contest={contest} />
}

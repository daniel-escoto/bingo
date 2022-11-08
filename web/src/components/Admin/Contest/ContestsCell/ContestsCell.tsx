import type { FindContests } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Contests from 'src/components/Admin/Contest/Contests'

export const QUERY = gql`
  query FindContests {
    contests {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No contests yet. '}
      <Link
        to={routes.adminNewContest()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ contests }: CellSuccessProps<FindContests>) => {
  return <Contests contests={contests} />
}

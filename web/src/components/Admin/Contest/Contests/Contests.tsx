import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/Contest/ContestsCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

import type { DeleteContestMutationVariables, FindContests } from 'types/graphql'

const DELETE_CONTEST_MUTATION = gql`
  mutation DeleteContestMutation($id: Int!) {
    deleteContest(id: $id) {
      id
    }
  }
`

const ContestsList = ({ contests }: FindContests) => {
  const [deleteContest] = useMutation(DELETE_CONTEST_MUTATION, {
    onCompleted: () => {
      toast.success('Contest deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteContestMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete contest ' + id + '?')) {
      deleteContest({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Text word</th>
            <th>Max entries</th>
            <th>Num winners</th>
            <th>Loser gets</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Enter msg</th>
            <th>Winner msg</th>
            <th>Loser msg</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {contests.map((contest) => (
            <tr key={contest.id}>
              <td>{truncate(contest.id)}</td>
              <td>{truncate(contest.name)}</td>
              <td>{truncate(contest.textWord)}</td>
              <td>{truncate(contest.maxEntries)}</td>
              <td>{truncate(contest.numWinners)}</td>
              <td>{checkboxInputTag(contest.loserGets)}</td>
              <td>{timeTag(contest.startDate)}</td>
              <td>{timeTag(contest.endDate)}</td>
              <td>{truncate(contest.enterMsg)}</td>
              <td>{truncate(contest.winnerMsg)}</td>
              <td>{truncate(contest.loserMsg)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminContest({ id: contest.id })}
                    title={'Show contest ' + contest.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditContest({ id: contest.id })}
                    title={'Edit contest ' + contest.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete contest ' + contest.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(contest.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ContestsList

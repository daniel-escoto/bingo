
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag,  } from 'src/lib/formatters'

import type { DeleteContestMutationVariables, FindContestById } from 'types/graphql'

const DELETE_CONTEST_MUTATION = gql`
  mutation DeleteContestMutation($id: Int!) {
    deleteContest(id: $id) {
      id
    }
  }
`

interface Props {
  contest: NonNullable<FindContestById['contest']>
}

const Contest = ({ contest }: Props) => {
  const [deleteContest] = useMutation(DELETE_CONTEST_MUTATION, {
    onCompleted: () => {
      toast.success('Contest deleted')
      navigate(routes.adminContests())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteContestMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete contest ' + id + '?')) {
      deleteContest({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Contest {contest.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{contest.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{contest.name}</td>
            </tr><tr>
              <th>Text word</th>
              <td>{contest.textWord}</td>
            </tr><tr>
              <th>Max entries</th>
              <td>{contest.maxEntries}</td>
            </tr><tr>
              <th>Num winners</th>
              <td>{contest.numWinners}</td>
            </tr><tr>
              <th>Loser gets</th>
              <td>{checkboxInputTag(contest.loserGets)}</td>
            </tr><tr>
              <th>Start date</th>
              <td>{timeTag(contest.startDate)}</td>
            </tr><tr>
              <th>End date</th>
              <td>{timeTag(contest.endDate)}</td>
            </tr><tr>
              <th>Enter msg</th>
              <td>{contest.enterMsg}</td>
            </tr><tr>
              <th>Winner msg</th>
              <td>{contest.winnerMsg}</td>
            </tr><tr>
              <th>Loser msg</th>
              <td>{contest.loserMsg}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditContest({ id: contest.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(contest.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Contest

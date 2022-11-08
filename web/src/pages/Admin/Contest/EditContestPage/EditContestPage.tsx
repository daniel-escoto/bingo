import EditContestCell from 'src/components/Admin/Contest/EditContestCell'

type ContestPageProps = {
  id: number
}

const EditContestPage = ({ id }: ContestPageProps) => {
  return <EditContestCell id={id} />
}

export default EditContestPage

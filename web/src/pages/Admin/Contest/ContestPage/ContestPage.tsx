import ContestCell from 'src/components/Admin/Contest/ContestCell'

type ContestPageProps = {
  id: number
}

const ContestPage = ({ id }: ContestPageProps) => {
  return <ContestCell id={id} />
}

export default ContestPage

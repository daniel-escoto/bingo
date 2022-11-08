import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const contests: QueryResolvers['contests'] = () => {
  return db.contest.findMany()
}

export const contest: QueryResolvers['contest'] = ({ id }) => {
  return db.contest.findUnique({
    where: { id },
  })
}

export const createContest: MutationResolvers['createContest'] = ({
  input,
}) => {
  return db.contest.create({
    data: input,
  })
}

export const updateContest: MutationResolvers['updateContest'] = ({
  id,
  input,
}) => {
  return db.contest.update({
    data: input,
    where: { id },
  })
}

export const deleteContest: MutationResolvers['deleteContest'] = ({ id }) => {
  return db.contest.delete({
    where: { id },
  })
}

export const schema = gql`
  type Contest {
    id: Int!
    name: String!
    textWord: String!
    maxEntries: Int!
    numWinners: Int!
    loserGets: Boolean!
    startDate: DateTime!
    endDate: DateTime!
    enterMsg: String!
    winnerMsg: String!
    loserMsg: String!
  }

  type Query {
    contests: [Contest!]! @requireAuth
    contest(id: Int!): Contest @requireAuth
  }

  input CreateContestInput {
    name: String!
    textWord: String!
    maxEntries: Int!
    numWinners: Int!
    loserGets: Boolean!
    startDate: DateTime!
    endDate: DateTime!
    enterMsg: String!
    winnerMsg: String!
    loserMsg: String!
  }

  input UpdateContestInput {
    name: String
    textWord: String
    maxEntries: Int
    numWinners: Int
    loserGets: Boolean
    startDate: DateTime
    endDate: DateTime
    enterMsg: String
    winnerMsg: String
    loserMsg: String
  }

  type Mutation {
    createContest(input: CreateContestInput!): Contest! @requireAuth
    updateContest(id: Int!, input: UpdateContestInput!): Contest! @requireAuth
    deleteContest(id: Int!): Contest! @requireAuth
  }
`

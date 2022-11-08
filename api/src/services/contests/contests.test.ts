import type { Contest } from '@prisma/client'

import {
  contests,
  contest,
  createContest,
  updateContest,
  deleteContest,
} from './contests'
import type { StandardScenario } from './contests.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('contests', () => {
  scenario('returns all contests', async (scenario: StandardScenario) => {
    const result = await contests()

    expect(result.length).toEqual(Object.keys(scenario.contest).length)
  })

  scenario('returns a single contest', async (scenario: StandardScenario) => {
    const result = await contest({ id: scenario.contest.one.id })

    expect(result).toEqual(scenario.contest.one)
  })

  scenario('creates a contest', async () => {
    const result = await createContest({
      input: {
        name: 'String',
        textWord: 'String',
        maxEntries: 868150,
        numWinners: 8029041,
        loserGets: true,
        startDate: '2022-11-08T02:22:48.575Z',
        endDate: '2022-11-08T02:22:48.575Z',
        enterMsg: 'String',
        winnerMsg: 'String',
        loserMsg: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.textWord).toEqual('String')
    expect(result.maxEntries).toEqual(868150)
    expect(result.numWinners).toEqual(8029041)
    expect(result.loserGets).toEqual(true)
    expect(result.startDate).toEqual(new Date('2022-11-08T02:22:48.575Z'))
    expect(result.endDate).toEqual(new Date('2022-11-08T02:22:48.575Z'))
    expect(result.enterMsg).toEqual('String')
    expect(result.winnerMsg).toEqual('String')
    expect(result.loserMsg).toEqual('String')
  })

  scenario('updates a contest', async (scenario: StandardScenario) => {
    const original = (await contest({ id: scenario.contest.one.id })) as Contest
    const result = await updateContest({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a contest', async (scenario: StandardScenario) => {
    const original = (await deleteContest({
      id: scenario.contest.one.id,
    })) as Contest
    const result = await contest({ id: original.id })

    expect(result).toEqual(null)
  })
})

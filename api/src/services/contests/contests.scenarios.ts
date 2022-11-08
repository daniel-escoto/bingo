import type { Prisma, Contest } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ContestCreateArgs>({
  contest: {
    one: {
      data: {
        name: 'String',
        textWord: 'String',
        maxEntries: 2447501,
        numWinners: 9444782,
        loserGets: true,
        startDate: '2022-11-08T02:22:48.598Z',
        endDate: '2022-11-08T02:22:48.598Z',
        enterMsg: 'String',
        winnerMsg: 'String',
        loserMsg: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        textWord: 'String',
        maxEntries: 4747313,
        numWinners: 8868988,
        loserGets: true,
        startDate: '2022-11-08T02:22:48.598Z',
        endDate: '2022-11-08T02:22:48.598Z',
        enterMsg: 'String',
        winnerMsg: 'String',
        loserMsg: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Contest, 'contest'>

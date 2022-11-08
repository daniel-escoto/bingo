-- CreateTable
CREATE TABLE "Contest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "textWord" TEXT NOT NULL,
    "maxEntries" INTEGER NOT NULL,
    "numWinners" INTEGER NOT NULL,
    "loserGets" BOOLEAN NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "enterMsg" TEXT NOT NULL,
    "winnerMsg" TEXT NOT NULL,
    "loserMsg" TEXT NOT NULL
);

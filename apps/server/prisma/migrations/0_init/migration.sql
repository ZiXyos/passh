-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'DEV');

-- CreateTable
CREATE TABLE "LocalCredentials" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rememberMeToken" TEXT,
    "accountId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LocalCredentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GoogleCredentials" (
    "id" TEXT NOT NULL,
    "google_id" TEXT NOT NULL,
    "accountId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GoogleCredentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PasswordItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "link" TEXT[],
    "tags" TEXT[],
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "PasswordItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LocalCredentials_id_key" ON "LocalCredentials"("id");

-- CreateIndex
CREATE UNIQUE INDEX "LocalCredentials_email_key" ON "LocalCredentials"("email");

-- CreateIndex
CREATE UNIQUE INDEX "LocalCredentials_accountId_key" ON "LocalCredentials"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "GoogleCredentials_id_key" ON "GoogleCredentials"("id");

-- CreateIndex
CREATE UNIQUE INDEX "GoogleCredentials_accountId_key" ON "GoogleCredentials"("accountId");

-- AddForeignKey
ALTER TABLE "LocalCredentials" ADD CONSTRAINT "LocalCredentials_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GoogleCredentials" ADD CONSTRAINT "GoogleCredentials_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordItem" ADD CONSTRAINT "PasswordItem_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;


/*
  Warnings:

  - The primary key for the `usersa` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "usersa" DROP CONSTRAINT "usersa_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "usersa_pkey" PRIMARY KEY ("id");

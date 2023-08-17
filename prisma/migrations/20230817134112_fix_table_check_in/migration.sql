/*
  Warnings:

  - The primary key for the `check_ins` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "check_ins" DROP CONSTRAINT "check_ins_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "check_ins_pkey" PRIMARY KEY ("id");

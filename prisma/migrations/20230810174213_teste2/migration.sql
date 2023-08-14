/*
  Warnings:

  - The primary key for the `usersa` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `usersa` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "usersa" DROP CONSTRAINT "usersa_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL DEFAULT 2,
ADD CONSTRAINT "usersa_pkey" PRIMARY KEY ("id");

/*
  Warnings:

  - You are about to drop the column `ingredientMeasurmentId` on the `RecipeIngredient` table. All the data in the column will be lost.
  - You are about to drop the `IngredientMeasurment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RecipeIngredient" DROP CONSTRAINT "RecipeIngredient_ingredientMeasurmentId_fkey";

-- AlterTable
ALTER TABLE "RecipeIngredient" DROP COLUMN "ingredientMeasurmentId",
ADD COLUMN     "ingredientMeasurementId" INTEGER;

-- DropTable
DROP TABLE "IngredientMeasurment";

-- CreateTable
CREATE TABLE "IngredientMeasurement" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "singularMeasurement" TEXT NOT NULL,
    "pluralMeasurement" TEXT NOT NULL,

    CONSTRAINT "IngredientMeasurement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IngredientMeasurement_singularMeasurement_key" ON "IngredientMeasurement"("singularMeasurement");

-- CreateIndex
CREATE UNIQUE INDEX "IngredientMeasurement_pluralMeasurement_key" ON "IngredientMeasurement"("pluralMeasurement");

-- AddForeignKey
ALTER TABLE "RecipeIngredient" ADD CONSTRAINT "RecipeIngredient_ingredientMeasurementId_fkey" FOREIGN KEY ("ingredientMeasurementId") REFERENCES "IngredientMeasurement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

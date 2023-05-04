/*
  Warnings:

  - You are about to drop the column `mealCategory` on the `Meal` table. All the data in the column will be lost.
  - You are about to drop the column `mealId` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `ingredientMeasurementId` on the `RecipeIngredient` table. All the data in the column will be lost.
  - You are about to drop the `IngredientMeasurement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MealToMealPlan` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `title` on table `Meal` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `ingredientMeasurement` to the `RecipeIngredient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "IngredientMeasurement" DROP CONSTRAINT "IngredientMeasurement_userId_fkey";

-- DropForeignKey
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_mealId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeIngredient" DROP CONSTRAINT "RecipeIngredient_ingredientMeasurementId_fkey";

-- DropForeignKey
ALTER TABLE "_MealToMealPlan" DROP CONSTRAINT "_MealToMealPlan_A_fkey";

-- DropForeignKey
ALTER TABLE "_MealToMealPlan" DROP CONSTRAINT "_MealToMealPlan_B_fkey";

-- DropIndex
DROP INDEX "Recipe_mealId_key";

-- AlterTable
ALTER TABLE "Meal" DROP COLUMN "mealCategory",
ADD COLUMN     "image" TEXT,
ALTER COLUMN "title" SET NOT NULL;

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "mealId";

-- AlterTable
ALTER TABLE "RecipeIngredient" DROP COLUMN "ingredientMeasurementId",
ADD COLUMN     "ingredientMeasurement" TEXT NOT NULL;

-- DropTable
DROP TABLE "IngredientMeasurement";

-- DropTable
DROP TABLE "_MealToMealPlan";

-- CreateTable
CREATE TABLE "MealPlanItem" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "itemDate" TIMESTAMP(3) NOT NULL,
    "mealCategoryId" INTEGER,
    "mealId" INTEGER,
    "recipeId" INTEGER,
    "mealPlanId" INTEGER NOT NULL,

    CONSTRAINT "MealPlanItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MealCategory" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "MealCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MealPlanItem" ADD CONSTRAINT "MealPlanItem_mealCategoryId_fkey" FOREIGN KEY ("mealCategoryId") REFERENCES "MealCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealPlanItem" ADD CONSTRAINT "MealPlanItem_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealPlanItem" ADD CONSTRAINT "MealPlanItem_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealPlanItem" ADD CONSTRAINT "MealPlanItem_mealPlanId_fkey" FOREIGN KEY ("mealPlanId") REFERENCES "MealPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealCategory" ADD CONSTRAINT "MealCategory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

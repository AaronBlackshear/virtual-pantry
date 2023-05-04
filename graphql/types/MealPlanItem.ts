import { builder } from "@/graphql/builder";

builder.prismaObject('MealPlanItem', {
  fields: (t) => ({
    id: t.exposeID('id'),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
    updatedAt: t.expose("createdAt", {
      type: "Date",
    }),
    itemDate: t.expose('itemDate', { nullable: false, type: "Date" }),
    mealCategory: t.relation('mealCategory', { nullable: true }),
    mealCategoryId: t.expose('mealCategoryId', { nullable: true, type: 'ID' }),
    meal: t.relation('meal', { nullable: true }),
    mealId: t.expose('mealId', { nullable: true, type: 'ID' }),
    recipe: t.relation('recipe', { nullable: true }),
    recipeId: t.expose('recipeId', { nullable: true, type: 'ID' }),
    mealPlan: t.relation('mealPlan'),
    mealPlanId: t.exposeID('mealPlanId'),
  })
})

import { builder } from "@/graphql/builder";

builder.prismaObject('RecipeIngredient', {
  fields: (t) => ({
    id: t.exposeID('id'),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
    updatedAt: t.expose("createdAt", {
      type: "Date",
    }),
    amount: t.exposeInt('amount'),
    ingredientMeasurement: t.exposeString('ingredientMeasurement'),
    ingredient: t.relation('ingredient'),
    ingredientId: t.exposeID('ingredientId'),
    recipe: t.relation('recipe'),
    recipeId: t.exposeID('recipeId'),
  })
})

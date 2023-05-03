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
    recipe: t.relation('recipe'),
    recipeId: t.exposeID('recipeId'),
    ingredient: t.relation('ingredient'),
    ingredientId: t.exposeID('ingredientId'),
    amount: t.exposeInt('amount'),
    ingredientMeasurment: t.relation('ingredientMeasurment'),
  })
})

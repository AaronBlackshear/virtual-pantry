import { builder } from "@/graphql/builder";

builder.prismaObject('Ingredient', {
  fields: (t) => ({
    id: t.exposeID('id'),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
    updatedAt: t.expose("createdAt", {
      type: "Date",
    }),
    name: t.exposeString('name'),
    recipeIngredients: t.relation('recipeIngredients'),
    user: t.relation('user'),
    userId: t.exposeID('userId'),
  })
})

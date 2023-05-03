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
    recipeIngredient: t.relation('recipeIngredient'),
  })
})

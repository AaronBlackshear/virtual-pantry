import { builder } from "@/graphql/builder";

builder.prismaObject('IngredientMeasurment', {
  fields: (t) => ({
    id: t.exposeID('id'),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
    updatedAt: t.expose("createdAt", {
      type: "Date",
    }),
    singularMeasurement: t.exposeString('singularMeasurement'),
    pluralMeasurement: t.exposeString('pluralMeasurement'),
    recipeIngredient: t.relation('recipeIngredient'),
  })
})

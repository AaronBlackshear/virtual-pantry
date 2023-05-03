import { builder } from "@/graphql/builder";

builder.prismaObject('Recipe', {
  fields: (t) => ({
    id: t.exposeID('id'),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
    updatedAt: t.expose("createdAt", {
      type: "Date",
    }),
    meal: t.relation('meal'),
    mealId: t.exposeID('mealId'),
    image: t.expose('image', { nullable: true, type: 'String' }),
    title: t.exposeString('title'),
    servings: t.exposeInt('servings'),
    prepTime: t.exposeInt('prepTime'),
    cookTime: t.exposeInt('cookTime'),
    ingredients: t.relation('ingredients'),
    directions: t.exposeStringList('directions'),
    note: t.expose('note', { nullable: true, type: 'String' })
  })
})

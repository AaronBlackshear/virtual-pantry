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
    image: t.expose('image', { nullable: true, type: 'String' }),
    name: t.exposeString('name'),
    servings: t.exposeInt('servings'),
    prepTime: t.exposeInt('prepTime'),
    cookTime: t.exposeInt('cookTime'),
    ingredients: t.relation('ingredients'),
    directions: t.exposeStringList('directions'),
    note: t.expose('note', { nullable: true, type: 'String' }),
    user: t.relation('user'),
    userId: t.exposeID('userId'),
    mealPlanItems: t.relation('mealPlanItems'),
  })
})

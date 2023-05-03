import { builder } from "@/graphql/builder";

builder.prismaObject('Meal', {
  fields: (t) => ({
    id: t.exposeID('id'),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
    updatedAt: t.expose("createdAt", {
      type: "Date",
    }),
    title: t.exposeString("title", { nullable: true }),
    mealCategory: t.exposeString("mealCategory", { nullable: true }),
    mealPlan: t.relation('mealPlan'),
    recipe: t.relation('recipe', { nullable: true }),
    user: t.relation('user'),
  })
})

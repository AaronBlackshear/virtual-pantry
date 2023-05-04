import { builder } from "@/graphql/builder";

builder.prismaObject('MealCategory', {
  fields: (t) => ({
    id: t.exposeID('id'),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
    updatedAt: t.expose("createdAt", {
      type: "Date",
    }),
    name: t.exposeString('name'),
    them: t.exposeString('theme'),
    order: t.exposeInt('order'),
    user: t.relation('user'),
    userId: t.exposeID('userId'),
    mealPlanItems: t.relation('mealPlanItems'),
  })
})

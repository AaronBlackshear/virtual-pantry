import { builder } from "@/graphql/builder";

builder.prismaObject('MealPlan', {
  fields: (t) => ({
    id: t.exposeID('id'),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
    updatedAt: t.expose("createdAt", {
      type: "Date",
    }),
    startDate: t.expose("createdAt", {
      type: "Date",
    }),
    endDate: t.expose("createdAt", {
      type: "Date",
    }),
    meals: t.relation('meals'),
    user: t.relation('user'),
  })
})

builder.queryField("mealPlans", (t) =>
  t.prismaConnection({
    type: 'MealPlan',
    cursor: 'id',
    resolve: (query, _parent, _args, _ctx, _info) => prisma.mealPlan.findMany({ ...query })
  })
)
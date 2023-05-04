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
    image: t.exposeString("image", { nullable: true }),
    name: t.exposeString("name", { nullable: false }),
    user: t.relation('user'),
    mealPlan: t.relation('mealPlanItems'),
  })
})

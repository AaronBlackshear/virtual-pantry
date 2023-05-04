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
    userId: t.expose('userId', { nullable: true, type: 'ID' }),
    mealPlanItems: t.relation('mealPlanItems'),
  })
})

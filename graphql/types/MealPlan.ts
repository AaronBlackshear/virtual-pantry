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

// TODO: Fix/update with correct mutation args after form content is built
builder.mutationField("createMealPlan", (t) =>
  t.prismaField({
    type: 'MealPlan',
    args: {
      startDate: t.arg({ type: 'Date', required: true }),
      endDate: t.arg({ type: 'Date', required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { startDate, endDate } = args

      const { user } = await ctx;

      if (!user) {
        throw new Error("You have to be logged in to perform this action")
      }

      return prisma.mealPlan.create({
        ...query,
        data: {
          startDate,
          endDate,
          userId: user.id,
        }
      })
    }
  })
)
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
    theme: t.exposeString('theme'),
    order: t.exposeInt('order'),
    user: t.relation('user'),
    userId: t.exposeID('userId'),
    mealPlanItems: t.relation('mealPlanItems'),
  })
})

builder.mutationField("createMealCategory", (t) =>
  t.prismaField({
    type: 'MealCategory',
    args: {
      name: t.arg({ type: 'String', required: true }),
      theme: t.arg({ type: 'String', required: true }),
      order: t.arg({ type: 'Int', required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { name, theme, order } = args

      const user = await prisma.user.findUnique({
        where: {
          email: (await ctx).user?.email,
        }
      })

      if (!user) {
        throw new Error("You have to be logged in to perform this action")
      }

      return prisma.mealCategory.create({
        ...query,
        data: {
          name,
          theme,
          order,
          user: {
            connect: {
              id: user.id
            }
          }
        }
      })
    }
  })
)

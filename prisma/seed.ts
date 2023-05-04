
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
      role: 'ADMIN',
      firstName: 'John',
      lastName: 'Doe',
    }
  })

  await prisma.mealPlan.create({
    data: {
      startDate: new Date('2023-05-02'),
      endDate: new Date('2023-05-09'),
      userId: user.id,
      mealPlanItems: {
        create: [
          {
            itemDate: new Date(),
            meal: {
              create: {
                name: 'Banana smoothie',
                userId: user.id,
              }
            },
            mealCategory: {
              create: {
                name: 'Breakfast',
                theme: 'gray',
                order: 1,
                userId: user.id,
              }
            }
          },
          {
            itemDate: new Date(),
            recipe: {
              create: {
                userId: user.id,
                name: "Chicken Fried Steak with Mashed Potatoes",
                servings: 2,
                prepTime: 15,
                cookTime: 45,
                directions: [
                  "Velit exercitation est proident eu est cillum consectetur eu eu.",
                  "Sit deserunt aute incididunt laborum cupidatat adipisicing enim.",
                  "Velit ad occaecat nostrud ad et minim ullamco aliquip ullamco nostrud.",
                  "Eu ut nostrud consectetur consectetur id mollit dolore laboris pariatur do consequat duis eu enim.",
                  "Tempor in eu eiusmod labore nisi ex officia adipisicing sunt nisi pariatur occaecat."
                ],
                ingredients: {
                  create: {
                    amount: 2,
                    ingredientMeasurement: "cups",
                    ingredient: {
                      create: {
                        name: 'Flour',
                        userId: user.id,
                      }
                    },
                  }
                }
              }
            },
            mealCategory: {
              create: {
                name: 'Dinner',
                theme: 'gray',
                order: 1,
                userId: user.id,
              }
            }
          },
        ]
      }
    },
  })

}


main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
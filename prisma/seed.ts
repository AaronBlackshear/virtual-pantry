
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
      meals: {
        create: [
          {
            title: 'Protein shake',
            userId: user.id,
          },
          {
            userId: user.id,
            mealCategory: 'Dinner',
            recipe: {
              create: {
                title: "Chicken Fried Steak with Mashed Potatoes",
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
                    ingredient: {
                      create: {
                        name: 'Flour'
                      }
                    },
                    ingredientMeasurment: {
                      create: {
                        singularMeasurement: 'cup',
                        pluralMeasurement: 'cups',
                      }
                    }
                  }
                }
              }
            }
          }
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
import { builder } from "@/graphql/builder";
import "@/graphql/types/Ingredient";
import "@/graphql/types/IngredientMeasurements";
import "@/graphql/types/Meal";
import "@/graphql/types/MealPlan";
import "@/graphql/types/Recipe";
import "@/graphql/types/RecipeIngredient";
import "@/graphql/types/User";


export const schema = builder.toSchema()
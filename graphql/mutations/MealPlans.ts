import { gql } from "@apollo/client";

export const CreateMealPlanMutation = gql`
  mutation createMealPlan(
    $startDate: Date!,
    $endDate: Date!,
  ) {
    createMealPlan(startDate: $startDate, endDate: $endDate) {
      id
      createdAt
      updatedAt
      startDate
      endDate
      meals
    }
  }
`
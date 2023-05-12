import { gql } from "@apollo/client";

export const CreateMealCategoryMutation = gql`
  mutation createMealCategory(
    $name: String!
    $theme: String!
    $order: Int!
  ) {
    createMealCategory(
      name: $name
      theme: $theme
      order: $order
    ) {
      id
      createdAt
    }
  }
`
import { gql } from "@apollo/client";

export const AllMealPlansQuery = gql`
  query($first: Int, $after: ID) {
    mealPlans(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          createdAt
          updatedAt
          startDate
          endDate
          user {
            id
            firstName
            lastName
          }
          meals {
            id
            title
            recipe {
              id
              title
              ingredients {
                id
                amount
                ingredientMeasurement {
                  singularMeasurement
                  pluralMeasurement
                }
                ingredient {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`
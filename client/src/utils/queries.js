import { gql } from '@apollo/client'

export const USER_EMAIL = gql`
  query UserEmail($email: String!) {
    userEmail(email: $email) 
  }
`

export const SUB_CATEGORY = gql`
query SubcategoryById($categoryId: ID!) {
  subcategoryById(category_id: $categoryId) {
    _id
    name
    category_id
  }
}
`


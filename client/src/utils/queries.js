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

export const ITEMS_SUB = gql`
query Query($subcategoryId: ID!, $offset: Int!, $limit: Int!) {
  itemsByCategory(subcategory_id: $subcategoryId, offset: $offset, limit: $limit) {
    category_id
    _id
    subcategory_id
    item
    category
    description
    price
    image
  }
}
`


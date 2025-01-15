import { gql } from '@apollo/client'

export const ME = gql`
query Query {
  me {
    email
    _id
    password
  }
}
`

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

export const SUB_CATEGORY2 = gql`
query Query($name: String!) {
  subcategoryByName(name: $name) {
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
    description
    price
    image
  }
}
`

export const ITEMS = gql`
query AllItemsByCategory($subcategoryId: ID!) {
  allItemsByCategory(subcategory_id: $subcategoryId) {
    _id
  }
}
`

export const SEARCH = gql`
query Query($item: String!, $offset: Int!, $limit: Int!, $sortOrder: String!) {
  searchByItem(item: $item, offset: $offset, limit: $limit, sort_order: $sortOrder ) {
    _id
    category_id
    item_category
    subcategory_id
    item_subcategory
    item
    description
    price
    image
  }
}
`
export const SEARCH_ITEM = gql`
query SearchItem($item: String!) {
  searchItem(item: $item) {
    _id
    category_id
    item_category
    subcategory_id
    item_subcategory
    item
    description
    price
    image
  }
}
`
export const CATEGORIES = gql`
query Query($categoryId: ID!, $offset: Int!, $limit: Int!) {
  categories(category_id: $categoryId, offset: $offset, limit: $limit) {
    _id
    category_id
    subcategory_id
    item
    location
    description
    price
    image
  }
}
`

export const CATEGORY = gql`
query Category($categoryId: ID!) {
  category(category_id: $categoryId) {
    _id
    category_id
    subcategory_id
    item
    location
    description
    price
    image
  }
}
`
export const ITEM_ID = gql`
query Query($id: ID!) {
  itemById(_id: $id) {
    _id
    item
    location
    description
    price
    image
  }
}
`

export const ALL_ITEMS_ID = gql`
query AllItemsById($ids: [ID!]!) {
  allItemsById(_ids: $ids) {
    item
    image
    price
    _id
  }
}
`

export const ITEM_CAT = gql`
query Query($itemCategory: String!, $filters: [String!]) {
  ItemsByCategory2(item_category: $itemCategory, filters: $filters) {
    _id
    category_id
    subcategory_id
    item_category
    item_subcategory
    item
    location
    description
    price
    image
    
  }
}
`

export const ITEM_CAT2 = gql`
query Query($itemCategory: String!, $offset: Int!, $limit: Int!, $sortOrder: String!, $filters: [String!]) {
  AllItemsByCategory2(item_category: $itemCategory, offset: $offset, limit: $limit, sort_order: $sortOrder, filters: $filters) {
    _id
    category_id
    subcategory_id
    item_category
    item_subcategory
    item
    location
    description
    price
    image
    
  }
}
`

import { gql } from '@apollo/client'

export const ADD_USER = gql`
mutation Mutation($email: String!, $password: String!) {
  addUser(email: $email, password: $password) {
    token
    user {
      _id
      email
      password
    }
  }
}
`

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      password
    }
  }
}
`

export const ADD_ITEM = gql`
mutation Mutation($item: String!, $description: String!, $price: Int!, $location: String!, $image: [JSON]!, $categoryId: ID!, $itemCategory: String!, $itemSubcategory: String, $subcategoryId: ID) {
  addItem(item: $item, description: $description, price: $price, location: $location, image: $image, category_id: $categoryId, item_category: $itemCategory, item_subcategory: $itemSubcategory, subcategory_id: $subcategoryId) {
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
    created_at
  }
}

`

export const REMOVE_ITEM = gql`
mutation RemoveItem($id: ID!) {
  removeItem(_id: $id) {
    _id
    category_id
    subcategory_id
    item
    description
    price
    image
  }
}
`
export const SUBMIT_EMAIL = gql`
mutation Mutation($name: String!, $email: String!, $message: String!) {
  submitContactForm(name: $name, email: $email, message: $message)
}
`

export const UPLOAD_IMAGE = gql`
mutation Mutation($file: Upload!) {
  uploadImage(file: $file) {
  url
  }
}
`

export const REMOVE_CHECKOUT = gql`
mutation Mutation($id: ID!) {
  removeItem(_id: $id) {
    _id
  }
}
`

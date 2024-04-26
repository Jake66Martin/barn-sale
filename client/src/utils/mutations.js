import { gql } from '@apollo/client'

export const ADD_USER = gql`
mutation Mutation($userName: String!, $email: String!, $password: String!) {
  addUser(userName: $userName, email: $email, password: $password) {
    token
    user {
      _id
      userName
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
      userName
      email
      password
    }
  }
}
`

export const ADD_ITEM = gql`
mutation Mutation($item: String!, $description: String!, $price: Int!, $location: String!, $image: String!, $categoryId: ID!, $subcategoryId: ID!) {
  addItem(item: $item, description: $description, price: $price, location: $location, image: $image, category_id: $categoryId, subcategory_id: $subcategoryId) {
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

export const REMOVE_ITEM = gql`
mutation RemoveItem($id: ID!) {
  removeItem(_id: $id) {
    _id
    category_id
    subcategory_id
    item
    category
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

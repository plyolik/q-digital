import { ADD_IMAGES } from "./actionTypes"

export const addImages = content => ({
  type: ADD_IMAGES,
  payload: {
    content
  }
})
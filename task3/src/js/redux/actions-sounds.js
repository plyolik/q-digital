import { ADD_SOUNDS } from "./actionTypes"

export const addSounds = content => ({
  type: ADD_SOUNDS,
  payload: {
    content
  }
})
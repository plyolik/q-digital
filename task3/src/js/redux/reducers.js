import { initialState } from "./initialState"
import { ADD_IMAGES, ADD_SOUNDS  } from "./actionTypes"

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_IMAGES: {
      const { content } = action.payload
      return {
        ...state,
        images: content
      }
    }
    case ADD_SOUNDS: {
      const { content } = action.payload
      return {
        ...state,
        sounds: content
      }
    }
    default: {
      return state
    }
  }
}
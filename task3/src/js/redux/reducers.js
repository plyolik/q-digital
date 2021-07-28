import { initialState } from "./initialState"
import { ADD_IMAGES } from "./actionTypes"

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_IMAGES: {
      const { content } = action.payload
      return {
        ...state,
        images: content
      }
    }
    default: {
      return state
    }
  }
}
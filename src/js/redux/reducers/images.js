const initialState = {
  images: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_IMAGE': {
      const {content} = action.payload
      return {
        ...state,
        images: [...state.images, content]
      }
    }
    default: {
      return state
    }
  }
}
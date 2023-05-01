interface TagState {
  tag: string,
}

interface TagAction {
  type: string,
  payload?: any,
}

const initialState: TagState = {
  tag: '',
}

export const TagReducer = (state = initialState, action: TagAction): TagState => {
  switch (action.type) {
    case "UPDATE_TAG":
      return { ...state, tag: action.payload }
    default:
      return state
  }
}
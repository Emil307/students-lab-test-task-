interface TagState {
  tag: string,
}

// enum TagActionTypes {
//   FETCH_LIKES = 'FETCH_LIKES',
// }

// interface FetchTagsAction {
//   type: TagActionTypes.FETCH_LIKES,
// }

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
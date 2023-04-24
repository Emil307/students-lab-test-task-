interface LikeState {
  likes: any[],
}

enum LikeActionTypes {
  FETCH_LIKES = 'FETCH_LIKES',
}

interface FetchLikesAction {
  type: LikeActionTypes.FETCH_LIKES,
}

interface LikeAction {
  type: string,
  payload?: any,
}

const initialState: LikeState = {
  likes: [],
}

export const likeReducer = (state = initialState, action: LikeAction): LikeState => {
  switch (action.type) {
    case LikeActionTypes.FETCH_LIKES:
      return { likes: [] }
    case "ADD_LIKED_QUOTE":
      return { ...state, likes: [...state.likes, action.payload] }
    default:
      return state
  }
}
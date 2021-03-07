
export const GET_ALL = "GET ALL"
export const setAll = (data) => ({ type: GET_ALL, data })

export default function incomeReducer(state, action) {
  switch (action.type) {
    case GET_ALL:
      return action.data;
    default:
      return state;
  }
}
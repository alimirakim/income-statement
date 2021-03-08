
// ACTIONS
export const GET_ALL = "GET ALL"
export const TOGGLE_MONTHLY = "TOGGLE_MONTHLY"
export const IS_MONTHLY = "IS_MONTHLY"
export const IS_QUARTERLY = "IS_QUARTERLY"
export const SET_OPTION = "SET_OPTION"

// ACTION CREATORS
export const setAll = (data) => ({ type: GET_ALL, data })
export const toggleMonthly = () => ({ type: TOGGLE_MONTHLY })
export const toggleToMonthly = () => ({ type: IS_MONTHLY })
export const toggleToQuarterly = () => ({ type: IS_QUARTERLY })
export const setOption = (option) => ({ type: SET_OPTION, option })

// REDUCER
export default function incomeReducer(state, action) {
  switch (action.type) {
    case GET_ALL:
      return { ...state, ...action.data };
    case TOGGLE_MONTHLY:
      return { ...state, isMonthly: !state.isMonthly }
    case IS_MONTHLY:
      return { ...state, isMonthly: true }
    case IS_QUARTERLY:
      return { ...state, isMonthly: false }
    case SET_OPTION:
      return { ...state, option: action.option }
    default:
      return state;
  }
}
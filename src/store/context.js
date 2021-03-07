import React, { createContext, useReducer } from 'react';
import incomeReducer, {setAll} from './reducer'

const IncomeContext = createContext();

export function IncomeContextProvider(props) {
  const dispatchSetAll = data => dispatch(setAll(data))

  const initState = {
    months: [],
    categories: [],
    subcategories: [],
    dispatchSetAll,
  }

  const [state, dispatch] = useReducer(incomeReducer, initState)

  return (
    <IncomeContext.Provider value={state}>
      {props.children}
    </IncomeContext.Provider>
  )
}

export default IncomeContext;

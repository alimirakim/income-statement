import React, {useContext} from "react"
import IncomeContext from "../store/context"

export default function makeTimeValue(subcategory) {
  const { isMonthly } = useContext(IncomeContext)
  const values = subcategory.monthly_values
  let total = 0;
  if (isMonthly) {
    total = values[values.length - 1].value
  } else {
    total = values.reduce((val, next, i) => (val + next.value), 0)
  }
  return total
}
import React, {useContext} from "react"
import IncomeContext from "../store/context"

export default function makeTimeHead() {
  const { isMonthly, months } = useContext(IncomeContext)
  const prevMonth = months[months.length - 1]
  if (!prevMonth) return null;
  if (isMonthly) {
    return prevMonth
  } else {
    return `${prevMonth} to ${months[months.length - 3]}`
  }
}

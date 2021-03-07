import React, { useContext, useEffect } from "react";

import { getIncomeStatement } from "./apiMock";
import { IncomeStatementCategory } from "./IncomeStatementCategory";
import numberToDollar from "./utils/numberToDollar"
import IncomeContext from "./store/context"

export default function IncomeStatementTable() {
  const {
    dispatchSetAll,
    months,
    categories,
    subcategories,
  } = useContext(IncomeContext)

  useEffect(() => {
    if (dispatchSetAll) {
      getIncomeStatement().then((response) => {
        dispatchSetAll(response);
      });
    }
  }, [])

  return (
    <table>
    
      <thead>
        <tr>
          <th>Monthly</th>
          {months.map((month, i) => (
            <th key={i}>{month.split(",")[0]}</th>
          ))}
        </tr>
      </thead>
      
      <tbody>
        {categories.map((category, i) => {
          return (<>

            <tr>
              <td colspan={4}>{category.name}</td>
            </tr>
            <IncomeStatementCategory
              category={category}
              subcats={subcategories}
            />
            <tr>
              <td>Total: </td>
              <td colspan={3}>{numberToDollar(category.total)}</td>
            </tr>
          </>);
        })}
      </tbody>
      
    </table>
  );
}

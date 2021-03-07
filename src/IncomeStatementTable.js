import React, { useContext, useEffect } from "react";

import { getIncomeStatement } from "./apiMock";
import { IncomeStatementCategory } from "./IncomeStatementCategory";
import IncomeContext from "./store/context"

export default function IncomeStatementTable() {
  const { dispatchSetAll, months, categories } = useContext(IncomeContext)

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
        {categories.map((category, i) => (
          <IncomeStatementCategory key={i} category={category} />
        ))}
      </tbody>

    </table>
  );
}

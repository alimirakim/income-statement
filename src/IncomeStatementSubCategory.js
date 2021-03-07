import React from "react";

import "./IncomeStatementStyles.css";
import numberToDollar from "./utils/numberToDollar"

export const IncomeStatementSubCategory = ({ subcategory }) => {
  // TODO implement this

  return (
    <tr className="IncomeContainer">
      <td>{subcategory.name}</td>
      {subcategory.monthly_values.map((mv, i) => (
        <td key={i}>{numberToDollar(mv.value)}</td>
      ))}
    </tr>
  );
};

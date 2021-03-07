import React, { useState, useContext } from "react";

import "./IncomeStatementStyles.css";
import { IncomeStatementSubCategory } from "./IncomeStatementSubCategory"
import IncomeContext from "./store/context"
import numberToDollar from "./utils/numberToDollar"

export const IncomeStatementCategory = ({ category }) => {
  const { subcategories } = useContext(IncomeContext)
  const [isCollapsed, setIsCollapsed] = useState(false)
  console.log("cat", isCollapsed, category)

  const collapse = () => setIsCollapsed(!isCollapsed)

  return (<>
    <td colSpan={4}>
      <button onClick={collapse}>{category.name}</button>
    </td>

    {isCollapsed ? null : <>
      {category.subcategory_ids.map(scid => (
        <IncomeStatementSubCategory
          subcategory={subcategories[scid]}
        />
      ))}

      <tr>
        <td>Total: </td>
        <td colSpan={3}>{numberToDollar(category.total)}</td>
      </tr>
    </>}
  </>);
};

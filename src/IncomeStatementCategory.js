import React from "react";

import "./IncomeStatementStyles.css";

export const IncomeStatementCategory = ({ category }) => {
  // TODO implement this
  if (!category.subCategories) {
    return <div className="IncomeContainer"></div>;
  }
  return (
    <div className="IncomeContainer">
      {category.subCategories.map((subCategory, i) => (
        <div key={i}>{subCategory.name}</div>
      ))}
    </div>
  );
};

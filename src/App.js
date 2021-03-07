import React, { useEffect, useContext, useState } from "react";
import IncomeStatementTable from "./IncomeStatementTable";

import { IncomeContextProvider } from "./store/context"

import "./styles.css";

export default function App() {

  return (
    <div className="App">
      <h1>Income Statement</h1>

      <IncomeContextProvider>
        <IncomeStatementTable />
      </IncomeContextProvider>
    </div>

  );
}

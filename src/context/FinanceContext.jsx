import { createContext, useContext, useEffect, useState } from "react";
import { load, save } from "../utils/storage";

const FinanceContext = createContext();

export function FinanceProvider({ children }) {
  const [transactions, setTransactions] = useState(() =>
    load("transactions", []),
  );

  const [toggleAddTransaction, setToggleAddTransaction] = useState(false);
  const [monthlyBudget, setMonthlyBudget] = useState(0);

  useEffect(() => {
    save("transactions", transactions);
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...transaction,
      },
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
        toggleAddTransaction,
        setToggleAddTransaction,
        monthlyBudget,
        setMonthlyBudget,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}

export function useFinance() {
  return useContext(FinanceContext);
}

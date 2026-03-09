import React, { createContext, useReducer, useContext } from 'react';
import { budgetReducer, initialState } from '../reducers/budgetReducer';

const BudgetContext = createContext();
export const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);
  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};
export const useBudget = () => useContext(BudgetContext); 
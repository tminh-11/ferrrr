import React, { createContext, useReducer } from 'react';
import { appReducer, initialState } from '../reducers/appReducer';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
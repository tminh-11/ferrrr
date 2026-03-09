export const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  expenses: [], 
};

export const budgetReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': return { ...state, user: action.payload };
    case 'LOGOUT': return { ...state, user: null, expenses: [] };
    case 'SET_EXPENSES': return { ...state, expenses: action.payload };
    case 'ADD_EXPENSE': return { ...state, expenses: [...state.expenses, action.payload] };
    case 'UPDATE_EXPENSE': 
      return { ...state, expenses: state.expenses.map(e => e.id === action.payload.id ? action.payload : e) };
    case 'DELETE_EXPENSE': 
      return { ...state, expenses: state.expenses.filter(e => e.id !== action.payload) };
    default: return state;
  }
};
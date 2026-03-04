export const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    accounts: []
};

export const appReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('user', JSON.stringify(action.payload));
            return { ...state, user: action.payload };
        case 'LOGOUT':
            localStorage.removeItem('user');
            return { ...state, user: null };
        case 'SET_ACCOUNTS':
            return { ...state, accounts: action.payload };
        case 'UPDATE_ACCOUNT_STATUS':
            return {
                ...state,
                accounts: state.accounts.map(acc => 
                    acc.id === action.payload.id ? { ...acc, status: action.payload.status } : acc
                )
            };
        default:
            return state;
    }
};
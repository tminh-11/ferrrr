import axios from 'axios';
const api = axios.create({ baseURL: 'http://localhost:9999' });

export const authService = {
  getUsers: () => api.get('/users'),
};

export const expenseService = {
  // Axios sẽ tự động chuyển thành: /expenses?userId=...
  getExpenses: (userId) => api.get('/expenses', { 
    params: { userId } 
  }),

  // Axios sẽ tự động chuyển thành: /expenses?userId=...&category_like=...
  filterExpenses: (userId, category) => api.get('/expenses', { 
    params: { 
      userId: userId, 
      category_like: category 
    } 
  }),

  addExpense: (data) => api.post('/expenses', data),
  
  // Ở đây vẫn dùng backtick bình thường vì đây là path (đường dẫn), không phải query params
  updateExpense: (id, data) => api.put(`/expenses/${id}`, data),
  deleteExpense: (id) => api.delete(`/expenses/${id}`),
};
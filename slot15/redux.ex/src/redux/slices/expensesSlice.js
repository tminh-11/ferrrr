import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001/expenses';

export const fetchExpenses = createAsyncThunk(
  'expenses/fetchExpenses',
  async (userId, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_URL}?userId=${userId}`);
      return res.data;
    } catch (error) {
      return rejectWithValue('Không thể tải danh sách chi tiêu');
    }
  }
);

export const addExpense = createAsyncThunk(
  'expenses/addExpense',
  async (expense, { rejectWithValue }) => {
    try {
      const res = await axios.post(API_URL, expense);
      return res.data;
    } catch (error) {
      return rejectWithValue('Không thể thêm chi tiêu');
    }
  }
);

export const updateExpense = createAsyncThunk(
  'expenses/updateExpense',
  async ({ id, ...data }, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, data);
      return res.data;
    } catch (error) {
      return rejectWithValue('Không thể cập nhật');
    }
  }
);

export const deleteExpense = createAsyncThunk(
  'expenses/deleteExpense',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue('Không thể xóa');
    }
  }
);

const initialState = { items: [], loading: false, error: null };

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchExpenses.pending, (state) => { state.loading = true; })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      // Add
      .addCase(addExpense.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // Update
      .addCase(updateExpense.fulfilled, (state, action) => {
        state.items = state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      // Delete
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export default expensesSlice.reducer;
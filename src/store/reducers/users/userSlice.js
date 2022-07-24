import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../../utils/axiso';

export const getUsers = createAsyncThunk(
  "todo/fetchList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/users');
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const filterUser = createAsyncThunk(
  "todo/fetchList",
  async (params, { rejectWithValue }) => {
    const queryParams = {
      page: params.page,
      id: params.id,
      username: params.search,
    }
    try {
      const response = await axios.get('/users', { params: queryParams });
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    message: "",

    filterUserList: [],
    filterUserErrorMessage: '',
  },
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled]: (state, { payload }) => {
      state.data = payload?.data;
    },
    [getUsers.rejected]: (state) => {
      state.message = "failed";
    },
    [filterUser.fulfilled]: (state, { payload }) => {
      state.filterUserList =payload?.data;
    },
    [filterUser.rejected]: (state) => {
      state.filterUserErrorMessage = '';
    },
  },
});

export default userSlice.reducer;
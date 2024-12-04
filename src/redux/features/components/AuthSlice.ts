import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API} from '../../../apis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {act} from 'react';

type LoginParams = {
  username: string;
  password: string;
};

type UserData = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string; // JWT access token
  refreshToken: string; // Refresh token
};

const initialState = {
  userData: null as null | UserData,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const login = createAsyncThunk<UserData, LoginParams>(
  'login',
  async (params, thunkApi) => {
    console.log('In Auth Slice', params);
    try {
      const response = await API.post('auth/login', params);
      return response.data;
    } catch (error) {
      console.log(' Error in AuthSlice', error);
      return thunkApi.rejectWithValue(error);
    }
  },
);
const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // login case
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    }); // pending pe status hai tou action a aam nhi hai warna (state, action)
    builder.addCase(login.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.userData = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(action.error);
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default AuthSlice.reducer;

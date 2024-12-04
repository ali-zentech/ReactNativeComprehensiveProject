import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterSlice from './features/components/counterSlice';
import AuthSlice from './features/components/AuthSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

const reducers = combineReducers({
  counter: counterSlice,
  auth: AuthSlice,
});

const persistedConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['auth'], // important reducer // dont want to be accessed anywhere
};

const persistedReducer = persistReducer(persistedConfig, reducers);
// Create the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export const persistor = persistStore(store);

// Export RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

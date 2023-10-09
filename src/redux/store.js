import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { isLoading, item, error } from './contactsReducer';

const rootReducer = combineReducers({
  item,
  isLoading,
  error,
});

export const store = configureStore({
  reducer: { contacts: rootReducer, filter: filterReducer },
});

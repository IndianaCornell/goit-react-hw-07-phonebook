import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOperations';

export const item = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
});

export const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

export const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});

export default combineReducers({
  item,
  isLoading,
  error,
});

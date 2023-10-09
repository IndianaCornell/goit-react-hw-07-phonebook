import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filteredContacts(state, action) {
      return action.payload;
    },
  },
});

export const { filteredContacts } = slice.actions;
export const filterReducer = slice.reducer;

// export const filteredContacts = createAction('filter/changeFilter');

// export const filterReducer = createReducer('', builder =>
//   builder.addCase(filteredContacts, (state, action) => action.payload)
// );

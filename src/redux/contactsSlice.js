import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;

// export const addContact = createAction('contacts/addContacts');
// export const deleteContact = createAction('contacts/deleteContacts');

// export const contactsReducer = createReducer(contactsInit, builder =>
//   builder
//     .addCase(addContact, (state, action) => {
//       state.push(action.payload);
//     })
//     .addCase(deleteContact, (state, action) => {
//       const index = state.findIndex(contact => contact.id === action.payload);
//       state.splice(index, 1);
//     })
// );

import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { fetchContacts, addContact, deleteContact } from './operations';

const initialContactsState = { items: [], isLoading: false, error: null };

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  toast.error(payload);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);

      toast.success(`${payload.name} has been added to your contacts`);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;

      const index = state.items.findIndex(contact => contact.id === payload.id);
      state.items.splice(index, 1);

      toast.success(`${payload.name} has been deleted from your contacts`);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export { contactsSlice };

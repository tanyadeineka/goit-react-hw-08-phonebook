import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, AddContact, deleteContact, logout } from "./operations";

const itemsSlice = createSlice({
    name: "items",
    initialState: {
      contacts: [],
      isLoading: false,
    },
    extraReducers: {
      [fetchContacts.pending](state) {
        state.isLoading = true;
      },
      [fetchContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.contacts = action.payload;
      },
      [fetchContacts.rejected](state) {
        state.isLoading = false;
      },
      [AddContact.pending](state) {
        state.isLoading = true;
      },
      [AddContact.fulfilled](state, action) {
        state.contacts.unshift(action.payload);
        state.isLoading = false;
      },
      [AddContact.rejected](state) {
        state.isLoading = false;
      },
      [deleteContact.pending](state) {
        state.isLoading = true;
      },
      [deleteContact.fulfilled](state, action) {
        state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
        state.isLoading = false;
      },
      [deleteContact.rejected](state) {
        state.isLoading = false;
      },
      [logout.pending](state) {
        state.isLoading = true;
      },
      [logout.fulfilled](state) {
        state.contacts = [];
        state.isLoading = false;
      },
      [logout.rejected](state) {
        state.isLoading = false;
      },
    }
  });
  
  export const itemsReducer = itemsSlice.reducer;
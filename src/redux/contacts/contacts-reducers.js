import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './contacts-actions';
import { getContacts, addContacts, deleteContacts } from './contacts-operations';

const items = createReducer([], {
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [addContacts.fulfilled]: (state, { payload }) => {
    if (state.some(contact => contact.name.toLowerCase() === payload.name)) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }
    return [...state, payload];
  },
  [deleteContacts.fulfilled]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [deleteContacts.fulfilled]: () => false,
  [deleteContacts.pending]: () => true,
  [deleteContacts.rejected]: () => false,
  [addContacts.fulfilled]: () => false,
  [addContacts.pending]: () => true,
  [addContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [getContacts.rejected]: (_, { payload }) => payload.message,
  [getContacts.pending]: () => null,
  [addContacts.pending]: () => null,
  [addContacts.rejected]: (_, { payload }) => payload.message,
  [deleteContacts.pending]: () => null,
  [deleteContacts.rejected]: (_, { payload }) => payload.message,
});

const filter = createReducer('', {
  [changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({ items, isLoading, error, filter });

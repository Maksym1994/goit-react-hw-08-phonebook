import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getFilteredContacts = createSelector([getItems, getFilter], (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();
  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
});

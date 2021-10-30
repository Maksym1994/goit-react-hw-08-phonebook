import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk('contacts/getContacts', async () => {
  const { data } = await axios.get(`contacts`);
  return data;
});

export const addContacts = createAsyncThunk('contacts/addContacts', async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
});

export const deleteContacts = createAsyncThunk('contacts/deleteContacts', async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
});

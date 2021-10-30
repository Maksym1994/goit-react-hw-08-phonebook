import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from '../redux/contacts/contacts-operations';
import ContactList from '../components/ContactsList';
import ContactForm from '../components/ContactsForm';
import Filter from '../components/Filter';
import s from './HomePage.module.css';

export default function ContactsView(params) {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getContacts()), [dispatch]);

  return (
    <div className={s.container}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

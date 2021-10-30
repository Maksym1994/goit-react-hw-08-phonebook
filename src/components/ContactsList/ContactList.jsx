import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as phonebookOperation from '../../redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperation.getContacts());
  }, [dispatch]);

  const onDeleteContact = id => dispatch(phonebookOperation.deleteContacts(id));

  if (contacts.length === 0) {
    return <h2 className={s.title}>Список контактов пуст!</h2>;
  } else {
    return (
      <ul className={s.items}>
        {contacts.map(({ id, name, number }) => (
          <tr className={s.table}>
            <li className={s.contactItem} key={id}>
              <p className={s.itemName}>Name: {name}</p>
              <p className={s.itemName}>Number: {number}</p>
              <button className={s.deleteBtn} type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </button>
            </li>
          </tr>
        ))}
      </ul>
    );
  }
};

export default ContactList;

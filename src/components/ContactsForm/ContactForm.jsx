import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as phonebookOperation from '../../redux/contacts/contacts-operations';
import s from './ContactForm.module.css';
import { ImUser } from 'react-icons/im';
import { ImPhone } from 'react-icons/im';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(phonebookOperation.addContacts({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <h2 className={s.labelTitle}>Имя</h2>
          <i className={s.icon}>
            <ImUser />
          </i>
          <input
            className={s.input}
            value={name}
            type="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
          />
        </label>
        <label>
          <h2 className={s.labelTitle}>Номер</h2>
          <i className={s.icon}>
            <ImPhone />
          </i>
          <input
            className={s.input}
            value={number}
            type="number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
          />
        </label>
        <button className={s.button} type="submit">
          Добавить контакты
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

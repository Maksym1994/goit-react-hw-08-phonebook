import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from '../components/ContactsForm/ContactForm.module.css';
import { register } from '../redux/auth/auth-operations';
import { Toaster } from 'react-hot-toast';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label>
          <h2 className={s.labelTitle}>Имя</h2>
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
          <h2 className={s.labelTitle}>Почта</h2>
          <input
            className={s.input}
            value={email}
            type="email"
            name="email"
            required
            onChange={handleChange}
          />
        </label>
        <label>
          <h2 className={s.labelTitle}>Пароль</h2>
          <input
            className={s.input}
            value={password}
            type="password"
            name="password"
            required
            onChange={handleChange}
          />
        </label>
        <button className={s.button} type="submit">
          Зарегистрироваться
        </button>
      </form>
      <div>
        <Toaster />
      </div>
    </div>
  );
}

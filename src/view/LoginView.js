import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';
import s from '../components/ContactsForm/ContactForm.module.css';
import { Toaster } from 'react-hot-toast';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
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
          Войти
        </button>
      </form>
      <div>
        <Toaster />
      </div>
    </div>
  );
}

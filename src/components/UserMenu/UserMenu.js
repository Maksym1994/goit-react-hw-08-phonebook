import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <nav className={s.nav}>
      <p className={s.title}>
        Добро пожаловать: <span className={s.name}>{name}</span>{' '}
      </p>
      <button className={s.button} type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </button>
    </nav>
  );
}

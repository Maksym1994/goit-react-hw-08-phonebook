import { NavLink } from 'react-router-dom';
import styles from '../components/AppBar/AppBar.module.css';

export default function AuthNav() {
  return (
    <nav>
      <NavLink to="/register" className={styles.link} activeClassName={styles.activeLink}>
        Регистрация
      </NavLink>
      <NavLink to="/login" className={styles.link} activeClassName={styles.activeLink}>
        Войти
      </NavLink>
    </nav>
  );
}

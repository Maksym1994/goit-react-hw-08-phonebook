import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from '../components/AppBar/AppBar.module.css';
import authSelectors from '../redux/auth/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={s.nav}>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Главная страница
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={s.link} activeClassName={s.activeLink}>
          Контакты
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;

import { Switch } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeView from './view/HomePage';
import LoginView from './view/LoginView';
import RegisterView from './view/RegisterView';
import ContactsView from './view/ContactsView';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRouter';
import AppBar from './components/AppBar/AppBar';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';
import Container from './components/Container/Container';
import { ToastContainer } from 'react-toastify';
import s from './App.css';

export default function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(authSelectors.getIsFetching);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetching && (
      <div className={s.container}>
        <AppBar />
        <Container>
          <Switch>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute exact path="/register" redirectTo="/contacts" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Container>
        <ToastContainer autoClose={3000} position="top-center" />
      </div>
    )
  );
}

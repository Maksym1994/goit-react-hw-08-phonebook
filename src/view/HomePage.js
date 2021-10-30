import React from 'react';
import logo from '../img/contact_icon.png';
import s from './HomePage.module.css';

const HomePage = () => (
  <div>
    <h1 className={s.title}>Добро пожаловать в телефонную книгу! </h1>
    <img className={s.img} src={logo} alt="contacts" />
  </div>
);

export default HomePage;

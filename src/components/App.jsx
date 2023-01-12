import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUser } from 'redux/operations';
import s from '../components/App.module.css'
import { AppBar } from './AppBar/AppBar';
import { Register } from './Register/Register';
import { Login } from './Login/Login';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

    return (
      <div>
        <AppBar />
        <Routes>
          <Route path="/" element={<div className={s.title}>Welcome to our phonebook!</div>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <ToastContainer autoClose={2000} />
      </div>
    );
  
  
};

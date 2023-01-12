import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from 'redux/selector';
import { register } from 'redux/operations';

import s from '../Register/Register.module.css'

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);

    const inputOperator = event => {
        if (event.target.name === 'name') {
          setName(event.target.value);
        } else if (event.target.name === 'email') {
          setEmail(event.target.value);
        } else if (event.target.name === 'password') {
          setPassword(event.target.value);
        } else {
          throw new Error('Unexpected value');
        }
      };
   
      const formSubmit = event => {
        event.preventDefault();
        dispatch(register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
      };
    
      if (!isAuth) {
        return (
          <div className={s.section}>
            <form onSubmit={formSubmit} className={s.form}>
            <label className={s.label}>
              Username
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces.
                    For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={inputOperator}
                className={s.input}
              />
            </label>
            <label className={s.label}>
              Email
              <input type="email" name="email" required value={email} onChange={inputOperator} className={s.input} />
            </label>
            <label className={s.label}>
              Password
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={inputOperator}
                className={s.input}
              />
            </label>
            <button type="submit" className={s.button}>
              Register
            </button>
          </form>
          </div>
        );
      } else {
        return <Navigate to="/contacts" replace={true} />;
      }
}
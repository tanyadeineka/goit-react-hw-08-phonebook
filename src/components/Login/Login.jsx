import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from 'redux/selector';
import { login } from 'redux/operations';
import s from '../Login/Login.module.css'

export const Login = () => {
    const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const inputOperator = event => {
    if (event.target.name === 'email') {
      setMail(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    } else {
      throw new Error('Unexpected value');
    }
  };
  const formSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setMail('');
    setPassword('');
  };

  if (!isAuth) {
    return (
      <div className={s.section}>
        <form onSubmit={formSubmit} className={s.form}>
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
          Log in
        </button>
      </form>
      </div>
    );
  } else {
    return <Navigate to="/contacts" replace={true} />;
  }
}
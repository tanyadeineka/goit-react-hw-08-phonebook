import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/selector';
import { UserMenu } from './UserMenu';
import s from '../AppBar/AppBar.module.css'
export const AppBar = () => {
    const isAuth = useSelector(selectIsAuth);

    return (
      <header className={s.header}>
        <Link to="/" className={s.title}>
          &#9990;
        </Link>
        <div className={s.navWrapper}>
          {!isAuth ? (
            <NavLink to="/register" className={s.link}>
              Register
            </NavLink>
          ) : null}
          {isAuth ? (
            <NavLink to="/contacts" className={s.link}>
              Contacts
            </NavLink>
          ) : null}
          {!isAuth ? (
            <NavLink to="/login" className={s.link}>
              Log In
            </NavLink>
          ) : null}
          {isAuth ? <UserMenu /> : null}
        </div>
      </header>
    );
}
import { useSelector, useDispatch } from 'react-redux';
import { selectGetEmail } from 'redux/selector';
import { logout } from 'redux/operations';

import s from '../AppBar/UserMenu.module.css'

export const UserMenu = () => {
    const dispatch = useDispatch();
    const email = useSelector(selectGetEmail);

    return (
        <div className={s.userMenu}>
        <p className={s.userEmail}>{email}</p>
        <button type="button" 
        onClick={() => dispatch(logout())} 
        className={s.link}>
            Log Out
        </button>
        </div>
    );
}
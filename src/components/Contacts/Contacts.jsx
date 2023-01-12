import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/selector';
import { ContactsList } from 'components/ContactsList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { InputForm } from 'components/InputForm/InputForm';

import s from '../Contacts/Contacts.module.css'

export function Contacts() {
    const isAuth = useSelector(selectIsAuth);
  
    if (isAuth) {
      return (
        <div className={s.wrapper}>
          <InputForm/>
          <Filter />
          <ContactsList/>
        </div>
      );
    } else {
      return <p className={s.title}>Log in to join the service!</p>;
    }
  }
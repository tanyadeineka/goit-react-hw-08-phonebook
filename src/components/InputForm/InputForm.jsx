import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddContact } from 'redux/operations';
import { selectGetItemsContacts } from 'redux/selector';
import { toast } from 'react-toastify';
import s from '../InputForm/InputForm.module.css'

export const InputForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(selectGetItemsContacts);
    const dispatch = useDispatch();

    const inputOperator = event => {
        if (event.target.name === 'name') {
        setName(event.target.value);
        } else if (event.target.name === 'number') {
        setNumber(event.target.value);
        } else {
        throw new Error('Unexpected value');
        }
    };

    const formSubmit = event => {
        event.preventDefault();
        if (contacts.reduce((acc, item) => [...acc, item.name], []).includes(name)) {
            toast.error(`${name} is already in contacts`);
        } else {
        dispatch(AddContact({ name, number }));
        setName('');
        setNumber('');
        }
    };

    return (
        <div className={s.section}>
            <form className={s.form} onSubmit={formSubmit}>
        <label className={s.label}>
            Name
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
            Number
            <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={inputOperator}
            className={s.input}
            />
        </label>
        <button type="submit" className={s.button}>
            Add contact
        </button>
        </form>
        </div>
    );
}
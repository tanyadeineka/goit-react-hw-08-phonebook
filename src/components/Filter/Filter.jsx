import { selectGetFilterValue } from 'redux/selector';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import s from '../Filter/Filter.module.css'

export const Filter = () => {
    const filter = useSelector(selectGetFilterValue);
    const dispatch = useDispatch();

    return (
        <div className={s.form}>
            <label className={s.label}>
                Find contacts by name
                <input
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. 
                            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={filter.value}
                onChange={e => dispatch(setFilter(e.target.value.toLowerCase()))}
                className={s.input}
                />
            </label>
        </div>
    );
}
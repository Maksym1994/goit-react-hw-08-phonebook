import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getItems } from '../../redux/contacts/contacts-selectors';
import s from './Filter.module.css';
import { ImList2 } from 'react-icons/im';

const Filter = () => {
  const contacts = useSelector(getItems);
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(changeFilter(e.target.value));

  if (contacts.length === 0) {
    return <h2 style={{ display: 'none' }}>Поиск</h2>;
  } else {
    return (
      <div className={s.filter}>
        <h3 className={s.titleFilter}>Поиск контактов по имени</h3>
        <div className={s.icons}>
          <i className={s.icon}>
            <ImList2 />
          </i>
          <input className={s.inputFilter} type="text" value={value} onChange={onChange} />
        </div>
      </div>
    );
  }
};

export default Filter;

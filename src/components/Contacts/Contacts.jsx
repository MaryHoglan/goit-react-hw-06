
import { FaPhone, FaUser } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import style from "../ContactList/ContactList.module.css";

export default function Contact({ data: { id, name, number } }) {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };



  return (
    <li className={style.listItem}>
      <div className={style.contInfo}>
        <p className={style.contName}>
          <FaUser className={style.icon}/>
          {name}
        </p>
        <a
          className={style.contNum}
          href={`tel:${number.replace(/[^\d+]/g, "")}`}
        >
          <FaPhone
            className={style.icon}/>
          {number}
        </a>
      </div>
      <button  type="button" onClick={handleDelete} className={style.btnDelete}>
        Delete
      </button>
    </li>
  );
}

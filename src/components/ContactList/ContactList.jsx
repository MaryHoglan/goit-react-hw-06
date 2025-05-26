import Contact from "../Contacts/Contacts";
import style from "./ContactList.module.css";

import { useSelector, useDispatch } from "react-redux";
import { selectContacts, deleteContact } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log("Contacts from Redux store:", contacts);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={style.contactsList}>
      {visibleContacts.length ? (
        visibleContacts.map((contact) => (
          <Contact key={contact.id} data={contact} onDelete={handleDelete} />
        ))
      ) : (
        <p className={style.noMatches}>No matches found</p>
      )}
    </ul>
  );
}


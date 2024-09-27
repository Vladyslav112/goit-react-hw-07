import style from "./Contact.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li className={style.container}>
      <div className={style.containerData}>
        <div>
          <AiOutlineUser className={style.icon} />
          <span className={style.itemEl}>{contact.name}</span>
        </div>
        <div>
          <FiPhone />
          <span className={style.itemEl}>{contact.number}</span>
        </div>
      </div>
      <button className={style.button} onClick={handleDelete}>
        <MdDelete />
      </button>
    </li>
  );
}

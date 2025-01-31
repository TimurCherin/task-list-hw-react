import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul className={styles.list}>
            {filteredContacts.map(({ id, name, number }) => (
                <li key={id} className={styles.item}>
                    {name}: {number}
                    <button onClick={() => dispatch(removeContact(id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
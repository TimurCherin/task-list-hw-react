import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        filter: '',
    },
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        removeContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addContact, removeContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
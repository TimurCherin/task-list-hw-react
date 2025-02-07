import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from './actions';

const initialState = {
    contacts: [],
    filter: '',
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return { ...state, contacts: [...state.contacts, action.payload] };
        case REMOVE_CONTACT:
            return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload) };
        case SET_FILTER:
            return { ...state, filter: action.payload };
        default:
            return state;
    }
};

export default contactsReducer;
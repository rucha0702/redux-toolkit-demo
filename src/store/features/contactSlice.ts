import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// creating template for contact
export interface Contact{
    id:number;
    fname:string;
    lname:string;
    phone:number;
    // phone:null | number;
}

// array of contacts
export interface ContactList{
    contacts:Contact[];
}

const initialState: ContactList = {
    contacts: localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')!) : [],
};

export const ContactSlice = createSlice({
    name:'contact',
    initialState,
    reducers:{
      addContact:(state, action:PayloadAction<{
        fname:string;
        lname:string;
        phone:number;
        // phone:number | null;
    }
    >) =>{
            state.contacts.push({
                id:state.contacts.length,
                fname:action.payload.fname,
                lname: action.payload.lname,
                phone:action.payload.phone
            });
            state.contacts.forEach((contact, index) => {
                contact.id = index + 1;
            });
            localStorage.setItem("contacts", JSON.stringify(state.contacts));
      },
      editContact:(state, action:PayloadAction<Contact>) =>{
            state.contacts[action.payload.id] =action.payload;
            localStorage.setItem("contacts", JSON.stringify(state.contacts));
      },
      deleteContact:(state, action:PayloadAction<number>) =>{
            state.contacts.splice(action.payload,1);
            state.contacts.forEach((contact, index) => {
                contact.id = index + 1;
            });
            localStorage.setItem("contacts", JSON.stringify(state.contacts));
      },
    }
})

export default ContactSlice.reducer;
export const {addContact, editContact, deleteContact}  = ContactSlice.actions;
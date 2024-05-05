import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// creating template for contact
export interface Contact{
    id:number;
    fname:string;
    lname:string;
    phone:null | number;
}

// array of contacts
export interface ContactList{
    contacts:Contact[];
}

const initialState: ContactList = {
    contacts:[],
};

export const ContactSlice = createSlice({
    name:'contact',
    initialState,
    reducers:{
      addContact:(state, action:PayloadAction<{
        fname:string;
        lname:string;
        phone:number | null;
    }
    >) =>{
            state.contacts.push({
                id:state.contacts.length,
                fname:action.payload.fname,
                lname: action.payload.lname,
                phone:action.payload.phone
            });
      },
      editContact:(state, action:PayloadAction<Contact>) =>{
            state.contacts[action.payload.id] =action.payload;
      },
    }
})

export default ContactSlice.reducer;
export const {addContact, editContact}  = ContactSlice.actions;
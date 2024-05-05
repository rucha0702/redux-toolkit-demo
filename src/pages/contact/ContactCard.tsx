import React, { useState } from 'react';
import InputBox from '../../components/inputbox/InputBox.tsx';
import { useAppDispatch } from '../../store/store.ts';
import { addContact } from '../../store/features/contactSlice.ts';
import { Contact } from '../../store/features/contactSlice.ts';


const ContactCard: React.FC = ()=>{
    const dispatch = useAppDispatch();


    const [contact, setContact] = useState<Contact>({
       id:-1,
       fname:'',
       lname:'',
       phone:null,
    });

 
    const handleSave: React.MouseEventHandler<HTMLButtonElement> = () => {
            dispatch(addContact(contact));
            setContact({
                id:-1,
                fname:'',
                lname:'',
                phone:0,
             });
    };

    return(
        <div className='border border-gray-600 p-2'>
            <div>
                <InputBox type={'text'} title={'First Name'} value={contact.fname} name={'fname'} setContact = {setContact}/>
            </div>
            <div>
                <InputBox type={'text'} title={'Last Name'} value={contact.lname} name={'lname'} setContact = {setContact}/>
            </div>
            <div>
                <InputBox type={'number'} title={'Mobile'} value={contact.phone} name={'phone'} setContact = {setContact}/>
            </div>

            <div>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default ContactCard;
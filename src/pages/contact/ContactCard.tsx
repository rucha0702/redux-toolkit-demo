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
       phone:0,
    });

    
 
    const handleSave: React.MouseEventHandler<HTMLButtonElement> = () => {
        if(contact.fname&&contact.lname&&contact.phone)
            {
                dispatch(addContact(contact));
            
            setContact({
                id:-1,
                fname:'',
                lname:'',
                phone:0,
             });
            }
            else
            {
                alert("Please fill all the details");
            }
    };
    return(
        <div className='border border-gray-200 bg-violet-100 p-2 w-full lg:w-1/2'>

            <div className='w-fit'>

            <div>
                <InputBox type={'text'} title={'First Name'} value={contact.fname} name={'fname'} setContact = {setContact}/>
            </div>
            <div>
                <InputBox type={'text'} title={'Last Name'} value={contact.lname} name={'lname'} setContact = {setContact}/>
            </div>
            <div>
                <InputBox type={'number'} title={'Mobile'} value={contact.phone} name={'phone'} setContact = {setContact}/>
            </div>

            <button  onClick={handleSave} className='text-left font-bold cursor-pointer hover:bg-violet-400 my-5 px-16 py-2 bg-violet-300 rounded-sm w-full'>
              Add Contact
            </button>

            </div>

        </div>
    )
}

export default ContactCard;
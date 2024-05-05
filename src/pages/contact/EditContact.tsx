import React, {useEffect, useState} from "react";
import InputBox from "../../components/inputbox/InputBox";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import { editContact } from "../../store/features/contactSlice";
import {Contact} from '../../store/features/contactSlice.ts';



interface InputBoxProps {
  setIdSelected: React.Dispatch<React.SetStateAction<boolean>>;
  
}

const EditContact:React.FC<InputBoxProps> = ({setIdSelected}) => {

  const dispatch = useAppDispatch();
  const selectedId = useAppSelector(state=>state.selected.selectedId);
  const contactSelected = useAppSelector(state=>state.contact.contacts[state.selected.selectedId]);

const [contact, setContact] = useState<Contact>(contactSelected || {
  id: -1,
  fname: '',
  lname: '',
  phone: null,
});


//  useEffect(()=>{
//     setContact((prev) =>prev = contactSelected);
//     console.log("contactSelected", contactSelected);
//  },[selectedId]);
useEffect(() => {
  if (contactSelected) {
    setContact(contactSelected);
  }
}, [contactSelected]);

 const handleSave: React.MouseEventHandler<HTMLButtonElement> = () => {
  dispatch(editContact(contact));
  setIdSelected(false);
};

  return (
    <div>EditContact
      <div onClick={()=>{setIdSelected(false)}}>
        close
      </div>
      <div className='border border-gray-600 p-2'>
            <div>
                <InputBox type={'text'} title={'First Name'} value={contact?contact.fname:''} name={'fname'} setContact = {setContact}/>
            </div>
            <div>
                <InputBox type={'text'} title={'Last Name'} value={contact?contact.lname:''} name={'lname'} setContact = {setContact}/>
            </div>
            <div>
                <InputBox type={'number'} title={'Mobile'} value={contact?contact.phone:''} name={'phone'} setContact = {setContact}/>
            </div>
            <div>{contact?contact.fname:''}</div>
            <div>{contact?contact.lname:''}</div>

            <div>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    </div>
  )
}

export default EditContact
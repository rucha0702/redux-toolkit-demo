import React, {useEffect, useState} from "react";
import InputBox from "../../components/inputbox/InputBox";
import { useAppSelector, useAppDispatch } from "../../store/store";
// import { useSelector } from "react-redux";
import { editContact } from "../../store/features/contactSlice";
import {Contact} from '../../store/features/contactSlice.ts';



interface InputBoxProps {
  setIdSelected: React.Dispatch<React.SetStateAction<boolean>>;
  
}

const EditContact:React.FC<InputBoxProps> = ({setIdSelected}) => {

  const dispatch = useAppDispatch();
  // const selectedId = useAppSelector(state=>state.selected.selectedId);
  const contactSelected = useAppSelector(state=>state.contact.contacts[state.selected.selectedId]);

const [contact, setContact] = useState<Contact>(contactSelected || {
  id: -1,
  fname: '',
  lname: '',
  phone: 0,
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
    <div className="bg-gray-800 relative bg-opacity-70 flex items-center justify-center w-full h-full">
      <div className='border border-gray-200 relative z-20 bg-white w-full lg:w-1/3 opacity-1 p-2'>
      <div className="absolute cursor-pointer top-5 right-5 bg-red-100 rounded-sm" onClick={()=>{setIdSelected(false)}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" className="bi bi-x-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
      </div>
            <div>
                <InputBox type={'text'} title={'First Name'} value={contact?contact.fname:''} name={'fname'} setContact = {setContact}/>
            </div>
            <div>
                <InputBox type={'text'} title={'Last Name'} value={contact?contact.lname:''} name={'lname'} setContact = {setContact}/>
            </div>
            <div>
                <InputBox type={'number'} title={'Mobile'} value={contact?contact.phone:''} name={'phone'} setContact = {setContact}/>
            </div>
            {/* <div>{contact?contact.fname:''}</div>
            <div>{contact?contact.lname:''}</div> */}

            <button  onClick={handleSave} className='text-left font-bold cursor-pointer hover:bg-violet-400 my-5 px-16 py-2 bg-violet-300 rounded-sm w-full lg:w-fit'>
              Save
            </button>
            
        </div>
    </div>
  )
}

export default EditContact
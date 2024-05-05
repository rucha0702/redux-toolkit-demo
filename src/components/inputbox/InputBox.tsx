// import React, { SetStateAction } from 'react';
// import { Dispatch } from 'redux';
import React from "react";
import { Contact } from "../../store/features/contactSlice";


  interface InputBoxProps {
    type: string;
    title: string;
    value: string | number | null;
    name: string;
    setContact: React.Dispatch<React.SetStateAction<Contact>>;
}

const InputBox: React.FC<InputBoxProps> = ({ type, title,value, name, setContact })=>{

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact(prevContact => ({ ...prevContact, [e.target.name]: e.target.value }));
    };
    return(
        <div className='text-left'>
            <div className='my-2'><span>{title}</span></div>
            <input onChange={(e)=>handleChange(e)} className='border-gray-300 border focus:border-gray-400' type={type} value={value} name={name} />
        </div>

    )
}

export default InputBox;
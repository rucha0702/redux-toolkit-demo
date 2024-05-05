import React,{useEffect, useState} from 'react';
import ContactCard from './ContactCard.tsx';
import { useAppSelector, useAppDispatch } from '../../store/store.ts';
import { selectContact } from '../../store/features/selectSlice.ts';
import EditContact from './EditContact.tsx';


const ContactPage : React.FC = ()=>{

    const contacts = useAppSelector(state=>state.contact.contacts);
    const selectedId = useAppSelector(state=>state.selected.selectedId);
    const [idSelected, setIdSelected] = useState(false);
    const dispatch = useAppDispatch();

    const handleChange = (num:number)=>{
        dispatch(selectContact(num));
        console.log("Sel id",selectedId);
        setIdSelected(true)
    }
    useEffect(()=>{

        console.log(selectedId);
    },[selectedId]);

    return(
        <div className=''>
            <ContactCard/>
            <div>
                        <div className='border border-gray-300 my-3 p-2'>
                            <table className='w-full text-left'>
                              
                              <tbody>
                                    <tr className=''>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    </tr>
                              
                                
                {contacts.map((contact,id)=>{
                    return(
                                    <tr key={id} className='w-full'>
                                        <td>{contact.id}</td>
                                        <td><span>{contact.fname}</span> <span className=''>{contact.lname}</span></td>
                                        <td>{contact.phone}</td>
                                        <td onClick={()=>handleChange(contact.id)}>edit</td>
                                        <td>delete</td>
                                    </tr>
                    )
                })}
                            </tbody>
                        </table>
                    </div>
            </div>


            <div className={`${idSelected?'bg-red-200 block z-10 top-0 w-full h-full absolute':'hidden'}`}>
               <EditContact setIdSelected = {setIdSelected}/> 
            </div>
        </div>
    )
}

export default ContactPage;
import React,{useEffect, useState} from 'react';
import ContactCard from './ContactCard.tsx';
import { useAppSelector, useAppDispatch } from '../../store/store.ts';
import { selectContact } from '../../store/features/selectSlice.ts';
import EditContact from './EditContact.tsx';
import { deleteContact } from '../../store/features/contactSlice.ts';


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
    const deleteNum = (num:number) =>{
        dispatch(deleteContact(num));
    }
    useEffect(()=>{

        console.log(selectedId);
    },[selectedId]);

    return(
        <div className='m-5'>
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
                                    <tr key={id} className={`text-left w-full text-black ${contact.id%2===0?'bg-gray-100':'bg-violet-100'}`}>
                                        <td>{contact.id}</td>
                                        <td><span>{contact.fname}</span> <span className=''>{contact.lname}</span></td>
                                        <td>{contact.phone}</td>
                                        <td onClick={()=>handleChange(contact.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="cursor-pointer bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>
                                        </td>
                                        <td onClick={()=>{deleteNum(contact.id)}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="cursor-pointer bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
                                        </td>
                                    </tr>
                    )
                })}
                            </tbody>
                        </table>
                    </div>
            </div>


            <div className={`${idSelected?'block z-10 top-0 left-0 h-full w-full h-full absolute':'hidden'}`}>
               <EditContact setIdSelected = {setIdSelected}/> 
            </div>
        </div>
    )
}

export default ContactPage;
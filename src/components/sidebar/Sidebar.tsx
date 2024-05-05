import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className=''>
        <div className='flex flex-col items-start p-3 gap-3'>
            <Link to='/contacts'>Contacts</Link>
            <Link to='/charts'>Charts & Maps</Link>
        </div>
    </div>
  )
}

export default Sidebar
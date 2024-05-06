import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className='h-full'>
        <div className='lg:h-full lg:px-10 lg:py-20 flex justify-center lg:justify-start lg:flex-col flex-row items-start p-3 gap-3'>
            <Link className='bg-white p-3 px-5 w-full text-left hover:bg-violet-300' to='/contacts'>Contacts</Link>
            <Link className='bg-white p-3 px-5 w-full text-left hover:bg-violet-300'  to='/charts'>Charts & Maps</Link>
        </div>
    </div>
  )
}

export default Sidebar
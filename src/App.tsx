import './App.css';
import Sidebar from './components/sidebar/Sidebar.tsx';
import ContactPage from './pages/contact/ContactPage.tsx';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='flex flex-col lg:flex-row w-full'>
        <div className='lg:w-1/4'>
        <Sidebar></Sidebar>
        </div>
        <div className='lg:w-3/4'>
        <Routes>
          <Route path='/contacts' Component={ContactPage}></Route>
          <Route path='/charts' element={<>Charts</>}></Route>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

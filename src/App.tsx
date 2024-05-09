import './App.css';
import Sidebar from './components/sidebar/Sidebar.tsx';
import ContactPage from './pages/contact/ContactPage.tsx';
// import Map from './pages/charts/Map.tsx';
import ChartsPage from './pages/charts/ChartsPage.tsx';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='flex flex-col lg:flex-row w-full'>
        <div className='lg:w-1/4 lg:h-screen sticky top-0 bg-violet-100'>
        <Sidebar></Sidebar>
        </div>
        <div className='lg:w-3/4'>
        <Routes>
          <Route path='/contacts' Component={ContactPage}></Route>
          <Route path='/charts' Component={ChartsPage}></Route>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

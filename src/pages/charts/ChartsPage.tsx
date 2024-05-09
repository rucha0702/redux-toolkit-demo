import Map from './Map.tsx';
import LineChart from './LineChart.tsx';
import { useState } from 'react';



const ChartsPage: React.FC = ()=>{

    const [map,setMap] = useState<boolean>(true);
return(
    <div>
        <div className='sticky lg:fixed lg:bottom-10 left-10 z-100 flex flex-col gap-2'>
            <button onClick={()=>setMap(true)} className='bg-white border border-red-600 p-2 px-6 rounded-md'>Map</button>
            <button onClick={()=>setMap(false)} className='bg-white border border-red-600 p-2 px-6 rounded-md'>Line Chart</button>
        </div>
        {
            map?<Map/>:<LineChart/>
        }
        {/* <Map/> */}
    </div>
)
}

export default ChartsPage;
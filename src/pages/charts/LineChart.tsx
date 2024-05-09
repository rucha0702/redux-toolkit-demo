// @ts-ignore
import CanvasJSReact from '@canvasjs/react-charts';
import axios from 'axios';
import { useEffect, useState } from 'react';

const fetchData = async ()=>{
    try{
        const result = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
        return result.data;
    }catch(err){
        throw err;
    }
}

const LineChart = ()=>{

    const [data,setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(()=>{
        const fetchChartData = async()=>{
            setIsLoading(true);
            try{
                const result = await fetchData();
                setData(result);
            }
            catch(error){
                throw error;
            }
            finally{
                setIsLoading(false);
            }
        }

        fetchChartData();
    },[])

    useEffect(()=>{

    },[data])

    const CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const objectToArray = (obj: any) => {
        return Object.keys(obj).map(key => {
            // console.log("key",key);
            return { label: key, y: obj[key] };
        });
    };
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Covid cases fluctuation"
        },
        axisY: {
            title: "Number of cases",
            suffix: ""
        },
        axisX: {
            title: "Date",
            prefix: "D",
            interval: 1
        },
        data: [{
            type: "line",
            toolTipContent: "{label}: {y}",
            dataPoints:data.cases ? objectToArray(data.cases):[
                { label: "1", y: 64 },
                { label: "2", y: 61 },
                { label: "3", y: 64 },
            ]
        }]
    }

    return(
        <div>Line Chart

            {
                isLoading?<div className='text-red-600 h1'>Loading...</div>:<div></div>
            }
            <div>
                
            <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
            </div>
        </div>
    )
}

export default LineChart;
import React, {useEffect, useState} from 'react';
// import {useQuery, QueryKey} from '@tanstack/react-query';
import axios from 'axios';
import { MapContainer, Marker, TileLayer, Popup} from 'react-leaflet';
import { Icon } from 'leaflet';
import './Map.css';
import 'leaflet/dist/leaflet.css';


const fetchData = async () => {
    try {
      const response = await axios.get('https://disease.sh/v3/covid-19/countries');
      return response.data;
    } catch (error) {
      throw error;
    }
  };


const Map:React.FC = () => {
  
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const center = {lat:28.7041, lng:77.1025}
    const ZOOM_LEVEL =9;

  
    useEffect(() => {
      const fetchDataAsync = async () => {
        setIsLoading(true);
        try {
          const result = await fetchData();
          setData(result);
          // console.log("data",data)
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
          // console.log(data);
        }
      };
  
      fetchDataAsync();
      // console.log("hdfks", data);
    }, []);

    useEffect(()=>{

      // console.log(data)
    },[data])
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  

    // const trial = [
    //   {
    //     geocode:[48.86, 2.3522],
    //     popup:"heiu"
    //   },
    //   {
    //     geocode:[33,65],
    //     popup:"heiu"
    //   },
    //   {
    //     geocode:[48.855,2.3522],
    //     popup:"heiu"
    //   }
    // ]
    const customIcon = new Icon({
      iconUrl:'https://res.cloudinary.com/de4by5q8o/image/upload/v1715246977/blue_udrzjz.png',
      iconSize:[38,38]
    })
  return (
    <div>
      <div>
        {
          data?
            <MapContainer center={center}  zoom = {ZOOM_LEVEL}>
              <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'></TileLayer>
               { data?
                data.map((marker:any, id:number)=>
                  <Marker key={id} position={[marker.countryInfo.lat,marker.countryInfo.long]} icon={customIcon}>
                    <Popup> 
                      <h2>Active: {marker.active}</h2>
                      <h2>Recovered: {marker.recovered}</h2>
                      <h2>Deaths: {marker.deaths}</h2>
                    </Popup>
                  </Marker>
                ):''
               }
            </MapContainer>:<div>No data</div>
        }
        </div>
        {/* <div>{data.updated}</div> */}
    </div>
  );
  
}


export default Map;
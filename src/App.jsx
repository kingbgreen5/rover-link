import React, { useState } from 'react';
import Header from './components/Header.jsx'
import RoverSelection from './components/RoverSelection.jsx';
import CuriositySearchBar from './components/CuriositySearchBar.jsx';
import PhotoCard from './components/PhotoCard.jsx';
import OpportunitySearchBar from './components/OpportunitySearchBar.jsx';
import SpiritSearchBar from './components/SpiritSearchBar.jsx';
import DataCard from './components/DataCard.jsx';
import PerseveranceSearchBar from './components/PerseveranceSearchBar.jsx';

export default function App() {
  const [selectedRover, setSelectedRover] = useState('');
  const [photoArray, setPhotoArray] = useState([])
  const [data, setData] = useState({})
  const [roverManifest, setRoverManifest] = useState(null)


  return (
    <>
    <Header roverManifest={roverManifest} selectedRover={selectedRover}/>
    <RoverSelection selectedRover={selectedRover} setSelectedRover={setSelectedRover} roverManifest={roverManifest} setRoverManifest={setRoverManifest}/>
    <DataCard roverManifest={roverManifest} selectedRover={selectedRover}/>

      {selectedRover === 'Perseverance' && <PerseveranceSearchBar photoArray={photoArray} setPhotoArray={setPhotoArray} data={data} setData={setData} roverManifest={roverManifest} />  } 
      {selectedRover === 'Curiosity' && <CuriositySearchBar photoArray={photoArray} setPhotoArray={setPhotoArray} data={data} setData={setData} roverManifest={roverManifest} />  }
      {/* {selectedRover === 'Spirit' && <SpiritSearchBar photoArray={photoArray} setPhotoArray={setPhotoArray} data={data} setData={setData}/>}
      {selectedRover === 'Opportunity' && <OpportunitySearchBar photoArray={photoArray} setPhotoArray={setPhotoArray} data={data} setData={setData}/>} */}

    <PhotoCard photoArray={photoArray}/>  

    </>
  )
}
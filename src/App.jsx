import React, { useState } from 'react';
import Header from './components/Header.jsx'
import RoverSelection from './components/RoverSelection.jsx';
import CuriositySearchBar from './components/curiositySearchBar.jsx';
import PhotoCard from './components/PhotoCard.jsx';
import OpportunitySearchBar from './components/OpportunitySearchBar.jsx';
import SpiritSearchBar
 from './components/SpiritSearchBar.jsx';
export default function App() {
  const [selectedRover, setSelectedRover] = useState('');
  const [photoArray, setPhotoArray] = useState([])
  const [data, setData] = useState({})

  return (
    <>
    <Header />
    <RoverSelection selectedRover={selectedRover} setSelectedRover={setSelectedRover} />
    {/* <div className='selected-rover'> <h1>Selected Rover: {selectedRover}</h1>   </div> */}
    

      {selectedRover === '' && <h1 className='select-rover'>PLEASE SELECT ROVER</h1>  }   
      {selectedRover === 'Curiosity' && <CuriositySearchBar photoArray={photoArray} setPhotoArray={setPhotoArray} data={data} setData={setData} />  }
      {selectedRover === 'Spirit' && <SpiritSearchBar photoArray={photoArray} setPhotoArray={setPhotoArray} data={data} setData={setData}/>}
      {selectedRover === 'Opportunity' && <OpportunitySearchBar photoArray={photoArray} setPhotoArray={setPhotoArray} data={data} setData={setData}/>}

    <PhotoCard photoArray={photoArray}/>  

    </>
  )
}
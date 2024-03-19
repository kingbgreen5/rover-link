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

  return (
    <>
    <Header />
    <RoverSelection selectedRover={selectedRover} setSelectedRover={setSelectedRover} />
    {/* <div className='selected-rover'> <h1>Selected Rover: {selectedRover}</h1>   </div> */}
    <h1>{photoArray.length}</h1>

      {selectedRover === '' && <CuriositySearchBar photoArray={photoArray} setPhotoArray={setPhotoArray} />  }   
      {selectedRover === 'Curiosity' && <CuriositySearchBar photoArray={photoArray} setPhotoArray={setPhotoArray} />  }
      {selectedRover === 'Spirit' && <SpiritSearchBar photoArray={photoArray} setPhotoArray={setPhotoArray}/>}
      {selectedRover === 'Opportunity' && <OpportunitySearchBar photoArray={photoArray} setPhotoArray={setPhotoArray} />}

    <PhotoCard photoArray={photoArray}/>  

    </>
  )
}
import React, { useState, useEffect } from 'react';


const DataCard = ({ roverManifest, selectedRover }) => {

    const rm= roverManifest
    const curiosityLocation= ''
    const curiosityDistance=''
    const opportunityLocation='Endeavour Crater';
    const opportunityDistance='45.16 KM';
    const spiritLocation='Columbia Hills'
    const spiritDistance='7.73 KM'
    const spiritObjective='Clues of past water'
    // const perseveranceLocation''
    // const perseveranceDistance ''

    if (selectedRover == "Opportunity"){
        const Location= opportunityLocation
        const Distance = opportunityDistance
    } else if (selectedRover== "Curiosity"){
        
    } else if (selectedRover== "Perseverance"){

    } else if ( selectedRover== "Spirit"){

    }


return(
            
            <div className='rover-manifest-card'>
            {roverManifest ? (
                <div className='grid-container'>

                <h2>Mission Data</h2>
                <p className='grid-item'>Status: -{rm.status}-</p>
                {selectedRover === 'Opportunity' && <p className='grid-item'>Location: {opportunityLocation}</p>}
                {selectedRover === 'Opportunity' && <p className='grid-item'>Distance Traveled: {opportunityDistance}</p>}           

                <p className='grid-item'>Landed: {rm.landing_date}</p>    
                <p className='grid-item'>Last Data: {rm.max_date}</p>





                </div>
            ) : (
            
               <div className='grid-container'>
          
                <h1 className='grid-item'>   PLEASE SELECT ROVER  </h1>
  
                
                </div>
                
            )}
        </div>

   

)
};


export default DataCard;            

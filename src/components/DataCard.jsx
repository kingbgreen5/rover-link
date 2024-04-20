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


return(
            
            <div className='rover-manifest-card'>
            {roverManifest ? (
                <div className='grid-container'>

                {/* <h2>Mission Data</h2> */}
                <p className='grid-item'>Mission Status: -{rm.status}-</p>
                {selectedRover === 'Opportunity' && <p className='grid-item'>Location: {opportunityLocation}</p>}
                {selectedRover === 'Opportunity' && <p className='grid-item'>Distance Traveled: {opportunityDistance}</p>}           
                {selectedRover === 'Spirit' && <p className='grid-item'>Location: {spiritLocation}</p>}
                {selectedRover === 'Spirit' && <p className='grid-item'>Distance Traveled: {spiritDistance}</p>}   
                <p className='grid-item'>Landed: {rm.landing_date}</p>    
                <p className='grid-item'>Last Data: {rm.max_date}</p>





                </div>
            ) : (
            
               <div className='grid-container'>
               {/* <h2>Mission Data</h2> */}
                <p className='grid-item'>Mission Status: NO ROVER</p>
                {/* <h1 className='grid-item'>   PLEASE SELECT ROVER  </h1> */}
                <p className='grid-item'>Location:</p>
                <p className='grid-item'>Distance Traveled:</p>
                <p className='grid-item'>Landed: </p>    
                <p className='grid-item'>Last Data: </p>
                
                </div>
                
            )}
        </div>

   

)
};


export default DataCard;            

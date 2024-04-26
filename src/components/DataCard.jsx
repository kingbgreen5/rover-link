import React, { useState, useEffect } from 'react';


const DataCard = ({ roverManifest, selectedRover }) => {

    const rm= roverManifest
    const curiosityLocation= 'Gale Crater'
    const opportunityLocation='Endeavour Crater';
    const spiritLocation='Columbia Hills'
    const perseveranceLocation= 'Jezero Crater'
    // const perseveranceDistance ''


return(
            
            <div className='rover-manifest-card'>
            {roverManifest ? ( 
                <div className='grid-container'>

                {/* <h2>Mission Data</h2> */}
                <p className='grid-item'>Name: {rm.name}</p>
                <p className='grid-item'>Mission Status: -{rm.status}-</p>
                {selectedRover === 'Opportunity' && <p className='grid-item'>Location: {opportunityLocation}</p>}
                {selectedRover === 'Spirit' && <p className='grid-item'>Location: {spiritLocation}</p>}
                {selectedRover === 'Curiosity' && <p className='grid-item'>Location: {curiosityLocation}</p>}
                {selectedRover === 'Perseverance' && <p className='grid-item'>Location: {perseveranceLocation}</p>}
                <p className='grid-item'>Landed: {rm.landing_date}</p>    
                <p className='grid-item'>Last Data: {rm.max_date}</p>






                </div>
            ) : (
            
               <div className='grid-container'>
               {/* <h2>Mission Data</h2> */}
                <p className='grid-item'>SELECT ROVER TO BEGIN</p>
                <p className='grid-item'>Mission Status: ---</p>
                <p className='grid-item'>Location: ---</p>
                <p className='grid-item'>Landed: --- </p>    
                <p className='grid-item'>Last Data: --- </p>
                
                </div>
                
            )}
        </div>

   

)
};


export default DataCard;            

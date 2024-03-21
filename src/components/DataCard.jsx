import React, { useState, useEffect } from 'react';


const DataCard = ({ roverManifest }) => {

    const rm= roverManifest
    const curiosityLocation= ''
    const opportunityLocation=''
    const spiritLocation=''

return(
            
            <div className='rover-manifest-card'>
            {roverManifest ? (
                <div>

                <h1>Rover Name: "{roverManifest.name}"</h1>
                <h3>Status: - {roverManifest.status} -</h3>
                <h1>Data Availible: {rm.landing_date} _ {rm.max_date}</h1>    
                <h3>Total Photos: {roverManifest.total_photos}</h3>
                
                </div>
            ) : (
                <h2>Please Select Rover</h2>
            )}
        </div>

   

)
};


export default DataCard;            

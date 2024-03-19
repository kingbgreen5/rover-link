import React, { useState, useEffect } from 'react';

const PhotoCard = ({ photoArray }) => {


return(
<div className='photoCard-container' >
    {photoArray && photoArray.length > 0 ? 
        <div >
            <h1 className='data-from-rover-name'>INCOMING DATA FROM: {photoArray[0].rover.name}</h1>
           
        {photoArray.map((photo,index) => (

            <div className='photoCard-div' key={index}>

                <img className='photo' src={photo.img_src} alt={`Image ${index}`} />
                <p className='cameraName-div'>{photo.camera.full_name}</p>
                <br />
            </div>
            )
        )
    }
    </div>
        : 
        <>
        Com Link: Offline</>}


</div>
    );
};


export default PhotoCard;            

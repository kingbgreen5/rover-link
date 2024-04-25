import React, { useState, useEffect } from 'react';

const PhotoCard = ({ photoArray }) => {


return(
<div className='photoCard-container' >
    {photoArray && photoArray.length > 0 ? 
        <div >
            <h2 className='data-from-rover-name'>IMAGE DATA RECEIVED FROM: {photoArray[0].rover.name}</h2>
           <p>Images Received: {photoArray.length}</p>
            <p>Earth Date: {photoArray[0].earth_date}</p>
            <p>Sol: {photoArray[0].sol}</p>
            
           
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
        <div>
            {/* <h1>IMAGE COM-LINK: OFFLINE</h1>
           <h3>Enter Valid Date</h3> */}
            </div></>}


</div>
    );
};


export default PhotoCard;            

// 

//     <div></div>
// : 
// <>
// <div>
//     <h1>COM LINK: OFFLINE</h1>
//     </div></>}
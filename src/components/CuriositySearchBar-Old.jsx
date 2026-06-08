import React, { useState, useEffect } from 'react';

const CuriositySearchBar = ({ photoArray, setPhotoArray, roverManifest }) => {

    const [lastDate, setLastDate] = useState([])
    const [formState, setFormState] = useState({ searchInput: ''});
    const startDate = new Date('2012-08-06');
   const [endDate, setEndDate] = useState(null); // Initialize endDate as null
   

    useEffect(() => {
        if (roverManifest && roverManifest.max_date) {
            const rmMaxDate = new Date(roverManifest.max_date);
            setEndDate(rmMaxDate); // Set endDate when roverManifest is available
        }
    }, [roverManifest]); // Run this effect whenever roverManifest changes

    const formDate = new Date(formState.searchInput);
    const isInRange = endDate && formDate >= startDate && formDate <= endDate;


    
function validateDate(dateStr) {
    const pattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    return pattern.test(dateStr);
}

// const dateValidation= validateDate(formState.searchInput)
// console.log(dateValidation)



const dateValidation = validateDate(formState.searchInput);

console.log("Input:");
console.log(formState.searchInput);

console.log("Date Validation:");
console.log(dateValidation);








    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
        setLastDate({
            ...formState,
            [name]: value,
        })
      };

      
      const handleFormSubmit = async (event) => {
        // usersSearchInput = formState.searchInput
        
        //-OLD API URL (DO NOT DELETE)-----------------
        // var apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' 
        // + formState.searchInput +  '&z&api_key=0kRnAVYNc2gsCR3nOYw7LjB2uBvKsB75RLIkT25q' 

const apiUrl =
  `https://api.marsvista.dev/api/v1/rovers/curiosity/photos?earth_date=${formState.searchInput}`;


        event.preventDefault();
        console.log("Submit Button Clicked")
        // console.log(formState.searchInput);
        // console.log(apiUrl)
   









    //     //-----------------DO NOT DELETE-----------------WE WILL NEED THIS TO REFERENCE TO BEEF UP THE TEMPORARY NEW FETCH REQUEST WE ARE ADDING.
    // //     try {
    // await fetch(apiUrl)                                         // FETCH Request
    // .then(function (response) {
    //   if (response.ok) {

    //     response.json().then(function (data) {
    //         setPhotoArray(data.photos)


            
    //       setLastDate(formState.searchInput)
    //       console.log('Last Date:')
    //         console.log(lastDate)

    //     //   console.log(Data)
    //       if (data.photos.length === 0) {
            
    //         displayError();
    //         return;
    //       }
    //      }
    //      )}})




const handleFormSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "X-API-Key": import.meta.env.VITE_MARS_API_KEY,
      },
    });

    const data = await response.json();

    console.log(data);

    setPhotoArray(data.photos || []);

  } catch (err) {
    console.error(err);
  }
};




















      // clear form values
      setFormState({
        searchInput: ''
      });
      
   };
  
useEffect(() =>{
   console.log('photoArray')
   console.log(photoArray)
},[lastDate])



return(


<div className='imagedatalink'>


{roverManifest ? (<> 
<div>
<h2 className='centered-text'>IMAGE DATALINK</h2>
</div>

<div className='search-container'>
{isInRange && dateValidation ? (
                <div>
                <p className='centered-text'> DATE VALID: ACTIVATE  </p>
                <p className='centered-text'> INITIATE BUTTON </p>
                </div>
            ) : (
              <div>
                <p className='centered-text'>ENTER DATE BETWEEN </p>
                <p className='centered-text'>{roverManifest.landing_date} --- {roverManifest.max_date}</p>
              </div>
            )}



<form className='searchbar-container' onSubmit={handleFormSubmit}>

<input 
className='search-bar' 
type="text"
name="searchInput"
placeholder= 'YYYY-MM-DD'
value={formState.searchInput}
onChange={handleChange}  
/>


{/* dont delete these it makes the spacing work */}
<br /><br /><br /><br /><br /><br />




{isInRange && dateValidation ? (<>
<button
id="search-button-valid" 
class="material-symbols-outlined" 
role="button"
type="submit"
>
   satellite_alt Initiate
</button> </>
):(

<><button 
id="search-button-notvalid" 
class="material-symbols-outlined" 
// role="button"
// type="submit"
>
   satellite_alt Initiate
</button> </>)}

</form>

</div>



</>):(<> </>)}

</div>


)
}

export default CuriositySearchBar;
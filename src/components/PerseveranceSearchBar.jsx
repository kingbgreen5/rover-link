import React, { useState, useEffect } from 'react';

const PerseveranceSearchBar = ({ photoArray, setPhotoArray }) => {

    const [lastDate, setLastDate] = useState([])
    const [formState, setFormState] = useState({ searchInput: ''});


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
        var apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' + formState.searchInput +  '&z&api_key=0kRnAVYNc2gsCR3nOYw7LjB2uBvKsB75RLIkT25q' 
        event.preventDefault();
        console.log("Submit Button Clicked")
        // console.log(formState.searchInput);
        // console.log(apiUrl)
   

    //     try {
    await fetch(apiUrl)                                         // FETCH Request
    .then(function (response) {
      if (response.ok) {

        response.json().then(function (data) {

            setPhotoArray(data.photos)
          setLastDate(formState.searchInput)
          console.log('Last Date:')
            console.log(lastDate)

        //   console.log(Data)
          if (data.photos.length === 0) {
            
            displayError();
            return;
          }
         }
         )}})

      // clear form values
      setFormState({
        searchInput: ''
      });
      
   };
  
useEffect(() =>{
    // setData(data)
    // console.log("Data")
    // console.log(Data)
//    setPhotoArray(data.photos)
   console.log('photoArray')
   console.log(photoArray)
},[lastDate])




    const currentDate = new Date();

    // Extract year, month, and day
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1 and pad with leading zeros if necessary
    const day = String(currentDate.getDate()).padStart(2, '0'); // Pad day with leading zeros if necessary

    // Format the date as YYYY-MM-DD
    const todaysDate = `${year}-${month}-${day}`
    const placeholderDates = '2012-08-06 | ' + todaysDate
     const formattedDate = `${year}-${month}-${day}`;


return(
<div>
<form className='searchbar-div' onSubmit={handleFormSubmit}>
<input 
className='search-bar' 
type="text"
name="searchInput"
placeholder= 'Enter Valid Date' 
value={formState.searchInput}
onChange={handleChange}  
/>

<button 
id="search-button" 
class="material-symbols-outlined" 
role="button"
type="submit"
>
   satellite_alt
</button>
<br />

{photoArray && photoArray.length > 0 ? 
<div>
<div class="container">
<div class="led-box">
<div class="led-green"></div>
</div>
</div>
</div>

: 
<div>
<div class="container">
<div class="led-box">
<div class="led-off"></div>
</div>
</div>

</div>

       }
</form>


{photoArray && photoArray.length > 0 ? 
<div>
</div>
:
<><h1 className='centered-text'>COM LINK: OFFLINE</h1></>}
</div>
)
}

export default PerseveranceSearchBar;
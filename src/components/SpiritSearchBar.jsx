import React, { useState, useEffect } from 'react';

const SpiritSearchBar = ({ photoArray, setPhotoArray }) => {

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
        var apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=' + formState.searchInput +  '&z&api_key=0kRnAVYNc2gsCR3nOYw7LjB2uBvKsB75RLIkT25q' 
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



     const spiritDates="2004-03-01 | 2010-03-21"


return(

<div>

<form className='searchbar-div' onSubmit={handleFormSubmit}>
<input 
className='search-bar' 
type="text"
name="searchInput"
placeholder= {spiritDates} 
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
</div>
)
}

export default SpiritSearchBar;
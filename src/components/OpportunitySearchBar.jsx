import React, { useState, useEffect } from 'react';

const OpportunitySearchBar = ({ photoArray, setPhotoArray }) => {

    const [lastDate, setLastDate] = useState([])
    const [formState, setFormState] = useState({ searchInput: ''});
    const startDate = new Date('2004-01-25');
    const endDate = new Date('2018-06-11');
    const formDate = new Date(formState.searchInput);
    const isInRange = formDate >= startDate && formDate <= endDate;

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
  console.log(formState)


      };

      
      const handleFormSubmit = async (event) => {
        // usersSearchInput = formState.searchInput
        var apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=' + formState.searchInput +  '&z&api_key=0kRnAVYNc2gsCR3nOYw7LjB2uBvKsB75RLIkT25q' 
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



     const opportunityDates="2004-01-25  2018-06-11"


return(

<div className='search-container'>


{photoArray && photoArray.length > 0 ? 
<div>
<h1 className='centered-text'>IMAGE DATALINK</h1>

</div>
:
<>
<h1 className='centered-text'>IMAGE DATALINK</h1>

</>}
<br />

{isInRange ? (<> </>):(<> </>)}

{/* {isInRange ? (

             <div>
<div class="container">
<div class="led-box">
<div class="led-green"></div>
<p>Valid Date</p>
</div>
<p>Valid Date</p>
</div>
</div>
            ) : (
                <div>
<div class="container">
<div class="led-box">
<div class="led-off">
</div>
<p class='led-label'>Valid Date</p>
</div>

</div>
</div>
            )} */}
<form className='searchbar-div' onSubmit={handleFormSubmit}>

<input 
className='search-bar' 
type="text"
name="searchInput"
placeholder= 'YYYY-MM-DD'
value={formState.searchInput}
onChange={handleChange}  
/>
{isInRange ? (<>
<button 
id="search-button-valid" 
class="material-symbols-outlined" 
role="button"
type="submit"
>
   satellite_alt
</button> </>
):(

<><button 
id="search-button-notvalid" 
class="material-symbols-outlined" 
role="button"
type="submit"
>
   satellite_alt
</button> </>)}


<br />


{/* {photoArray && photoArray.length > 0 ? 
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
       } */}
</form>



{isInRange ? (
                <p> ACTIVATE INITIATE BUTTON TO BEGIN DATA TRANSFER</p>
            ) : (
                <p className='centered-text'>ENTER DATE BETWEEN {opportunityDates}</p>
  
            )}

</div>
)
}

export default OpportunitySearchBar;
import React, { useState, useEffect } from 'react';

const OpportunitySearchBar = ({ photoArray, setPhotoArray }) => {

    const [lastDate, setLastDate] = useState([])
    const [formState, setFormState] = useState({ searchInput: ''});
    const startDate = new Date('2004-01-25');
    const endDate = new Date('2018-06-11');
    const formDate = new Date(formState.searchInput);
    const isInRange = formDate >= startDate && formDate <= endDate;



    
function validateDate(dateStr) {
    const pattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    return pattern.test(dateStr);
}

const dateValidation= validateDate(formState.searchInput)
console.log(dateValidation)





// validateDate((formState.searchInput))

// if (validateDate(formState.searchInput)) {
//     console.log("Valid date format.");
//     const validDateFormat=true
//     console.log("date is Valid")
// } else {
//   const validDateFormat=false
//   console.log("dateInvalid")
//   console.log(formState.searchInput)
// }


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



     const opportunityDates="2004-01-25 --- 2018-06-11"


return(

<div className='imagedatalink'>
<div>
<h2 className='centered-text'>IMAGE DATALINK</h2>
</div>


{/* {thingYouWantToCheck ? (<> </>):(<> </>)} */}

<div className='search-container'>

{isInRange && dateValidation ? (
                <div>
                <p className='centered-text'> DATE VALID: ACTIVATE  </p>
                <p className='centered-text'> INITIATE BUTTON </p>
                </div>
            ) : (
              <div>
                <p className='centered-text'>ENTER DATE BETWEEN </p>
                <p className='centered-text'>{opportunityDates}</p>
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

<br />
<br /><br /><br /><br />



<br />
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

</div>
)
}

export default OpportunitySearchBar;
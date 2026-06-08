import React, { useState, useEffect } from "react";

const PerseveranceSearchBar = ({
  photoArray,
  setPhotoArray,
  roverManifest,
}) => {
  const [formState, setFormState] = useState({
    searchInput: "",
  });

  const startDate = new Date("2021-02-18");
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    if (roverManifest?.max_date) {
      setEndDate(new Date(roverManifest.max_date));
    }
  }, [roverManifest]);

  function validateDate(dateStr) {
    const pattern =
      /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

    return pattern.test(dateStr);
  }

  const trimmedInput = formState.searchInput.trim();

  const dateValidation = validateDate(trimmedInput);

  const formDate = trimmedInput
    ? new Date(trimmedInput)
    : null;

  const isInRange =
    endDate &&
    formDate &&
    formDate >= startDate &&
    formDate <= endDate;

  const canSearch = isInRange && dateValidation;

  useEffect(() => {
    console.log("Input:");
    console.log(trimmedInput);

    console.log("Date Validation:");
    console.log(dateValidation);

    console.log("In Range:");
    console.log(isInRange);
  }, [trimmedInput, dateValidation, isInRange]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!canSearch) {
      console.log("Invalid search prevented");
      return;
    }

    console.log("=================================");
    console.log("Submit Button Clicked");
    console.log("=================================");

    console.log("Searching Date:");
    console.log(trimmedInput);

    const apiUrl =
      `https://api.marsvista.dev/api/v1/rovers/perseverance/photos?earth_date=${trimmedInput}`;

    console.log("API URL:");
    console.log(apiUrl);

    try {
      console.log("Starting Fetch...");

      const response = await fetch(apiUrl, {
        headers: {
          "X-API-Key": import.meta.env.VITE_MARS_API_KEY,
        },
      });

      console.log("Response Received");

      console.log("Status:");
      console.log(response.status);

      const data = await response.json();

      console.log("Response JSON:");
      console.log(data);

      console.log("Photos:");
      console.log(data.photos);

      setPhotoArray(data.photos || []);

      console.log("Photo Array Updated");
    } catch (error) {
      console.error("FETCH ERROR:");
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("Current photoArray:");
    console.log(photoArray);
  }, [photoArray]);

  return (
    <div className="imagedatalink">
      {roverManifest && (
        <>
          <div className="search-container">
            {canSearch ? (
              <div>
                <p className="centered-text">
                  DATE VALID
                </p>

                <p className="centered-text">
                  {roverManifest.landing_date}
                  {" --- "}
                  {roverManifest.max_date}
                </p>
              </div>
            ) : (
              <div>
                <p className="centered-text">
                  ENTER DATE BETWEEN
                </p>

                <p className="centered-text">
                  {roverManifest.landing_date}
                  {" --- "}
                  {roverManifest.max_date}
                </p>
              </div>
            )}

            <form
              className="searchbar-container"
              onSubmit={handleFormSubmit}
            >
              <input
                className="search-bar"
                type="text"
                name="searchInput"
                placeholder="YYYY-MM-DD"
                value={formState.searchInput}
                onChange={handleChange}
              />

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <button
                id={
                  canSearch
                    ? "search-button-valid"
                    : "search-button-notvalid"
                }
                className="material-symbols-outlined"
                type="submit"
                disabled={!canSearch}
              >
                satellite_alt Initiate
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default PerseveranceSearchBar;

// import React, { useState, useEffect } from 'react';

// const PerseveranceSearchBar = ({ photoArray, setPhotoArray, roverManifest }) => {
//     const [lastDate, setLastDate] = useState([]);
//     const [formState, setFormState] = useState({ searchInput: '' });
//     const startDate = new Date('2021-02-18');
//     const [endDate, setEndDate] = useState(null); // Initialize endDate as null

//     useEffect(() => {
//         if (roverManifest && roverManifest.max_date) {
//             const rmMaxDate = new Date(roverManifest.max_date);
//             setEndDate(rmMaxDate); // Set endDate when roverManifest is available
//         }
//     }, [roverManifest]); // Run this effect whenever roverManifest changes

//     const formDate = new Date(formState.searchInput);
//     const isInRange = endDate && formDate >= startDate && formDate <= endDate;


    
// function validateDate(dateStr) {
//     const pattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
//     return pattern.test(dateStr);
// }

// const dateValidation= validateDate(formState.searchInput)
// console.log(dateValidation)


//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormState({
//           ...formState,
//           [name]: value,
//         });
//         setLastDate({
//             ...formState,
//             [name]: value,
//         })
//       };

      
//       const handleFormSubmit = async (event) => {
//         // usersSearchInput = formState.searchInput
//         var apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=' + formState.searchInput +  '&z&api_key=0kRnAVYNc2gsCR3nOYw7LjB2uBvKsB75RLIkT25q' 
//         event.preventDefault();
//         console.log("Submit Button Clicked")
//         // console.log(formState.searchInput);
//         // console.log(apiUrl)
   

//     //     try {
//     await fetch(apiUrl)                                         // FETCH Request
//     .then(function (response) {
//       if (response.ok) {

//         response.json().then(function (data) {

//             setPhotoArray(data.photos)
//           setLastDate(formState.searchInput)
//           console.log('Last Date:')
//             console.log(lastDate)

//         //   console.log(Data)
//           if (data.photos.length === 0) {
            
//             displayError();
//             return;
//           }
//          }
//          )}})

//       // clear form values
//       setFormState({
//         searchInput: ''
//       });
      
//    };
  
// useEffect(() =>{
//    console.log('photoArray')
//    console.log(photoArray)
// },[lastDate])


// return(

// <div className='imagedatalink'>




// {roverManifest ? (<> 
// {/* <div><h2 className='centered-text'>IMAGE DATALINK</h2></div> */}

// <div className='search-container'>
// {isInRange && dateValidation ? (
//                 <div>
//                 <p className='centered-text'> DATE VALID: ACTIVATE  </p>
//                 <p className='centered-text'> INITIATE BUTTON </p>
//                 </div>
//             ) : (
//               <div>
//                 <p className='centered-text'>ENTER DATE BETWEEN </p>
//                 <p className='centered-text'>{roverManifest.landing_date} --- {roverManifest.max_date}</p>
//               </div>
//             )}



// <form className='searchbar-container' onSubmit={handleFormSubmit}>

// <input 
// className='search-bar' 
// type="text"
// name="searchInput"
// placeholder= 'YYYY-MM-DD'
// value={formState.searchInput}
// onChange={handleChange}  
// />


// {/* dont delete these it makes the spacing work */}
// <br /><br /><br /><br /><br /><br />




// {isInRange && dateValidation ? (<>
// <button
// id="search-button-valid" 
// class="material-symbols-outlined" 
// role="button"
// type="submit"
// >
//    satellite_alt Initiate
// </button> </>
// ):(

// <><button 
// id="search-button-notvalid" 
// class="material-symbols-outlined" 
// // role="button"
// // type="submit"
// >
//    satellite_alt Initiate
// </button> </>)}

// </form>

// </div>



// </>):(<> </>)}

// </div>





// )
// }

// export default PerseveranceSearchBar;




{/* <div>
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
</div> */}
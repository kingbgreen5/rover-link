import React, { useState, useEffect } from "react";

const CuriositySearchBar = ({
  photoArray,
  setPhotoArray,
  roverManifest,
}) => {
  const [formState, setFormState] = useState({
    searchInput: "",
  });

  const startDate = new Date("2012-08-06");
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

  const formDate = new Date(trimmedInput);

  const isInRange =
    endDate &&
    formDate >= startDate &&
    formDate <= endDate;

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

    console.log("=================================");
    console.log("Submit Button Clicked");
    console.log("=================================");

    console.log("Searching Date:");
    console.log(trimmedInput);

    const apiUrl =
      `https://api.marsvista.dev/api/v1/rovers/curiosity/photos?earth_date=${trimmedInput}`;

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

      console.log("Status Text:");
      console.log(response.statusText);

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

    // Leave the form populated while debugging
    // setFormState({ searchInput: "" });
  };

  useEffect(() => {
    console.log("Current photoArray:");
    console.log(photoArray);
  }, [photoArray]);

  return (
    <div className="imagedatalink">
      {roverManifest && (
        <>
          <div>
            <h2 className="centered-text">
              IMAGE DATALINK
            </h2>
          </div>

          <div className="search-container">
            {isInRange && dateValidation ? (
              <div>
                <p className="centered-text">
                  DATE VALID: ACTIVATE
                </p>
                <p className="centered-text">
                  INITIATE BUTTON
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
                  isInRange && dateValidation
                    ? "search-button-valid"
                    : "search-button-notvalid"
                }
                className="material-symbols-outlined"
                type="submit"
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

export default CuriositySearchBar;
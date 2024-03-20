import React, { useEffect } from 'react';


const RoverSelection = ({ selectedRover, setSelectedRover, roverManifest, setRoverManifest }) => {

    const handleButtonClick = async (rover) => {
        setSelectedRover(rover);
           };


        useEffect(() => {
            const fetchRoverManifest = async () => {
          
                var roverManifestURL = 'https://api.nasa.gov/mars-photos/api/v1/manifests/' + selectedRover + '/?api_key=0kRnAVYNc2gsCR3nOYw7LjB2uBvKsB75RLIkT25q';
                console.log({ selectedRover });
                console.log(roverManifestURL);
                try {
                    const response = await fetch(roverManifestURL); // FETCH Request
                    if (response.ok) {
                        var roverData = await response.json();
                        console.log(roverData);

                        // Handle the fetched roverData as needed, such as updating state
                        // setRoverData(roverData);
                    } else {
                        throw new Error('Error fetching rover manifest');
                    }
                } catch (error) {
                    console.error('Error fetching rover manifest:', error);
                }
            };
        
            // setRoverManifest(roverData)

            fetchRoverManifest();
        }, [selectedRover]);




    return (
        <div className="rover-select-container">
            <button
                className={`rover-select-button ${selectedRover === 'Curiosity' ? 'selected' : ''}`}
                onClick={() => handleButtonClick('Curiosity')}
            >
                CURIOSITY
            </button>
            <button
                className={`rover-select-button ${selectedRover === 'Opportunity' ? 'selected' : ''}`}
                onClick={() => handleButtonClick('Opportunity')}
            >
                OPPORTUNITY
            </button>
            <button
                className={`rover-select-button ${selectedRover === 'Spirit' ? 'selected' : ''}`}
                onClick={() => handleButtonClick('Spirit')}
            >
                SPIRIT
            </button>
        </div>
    );
};

export default RoverSelection;
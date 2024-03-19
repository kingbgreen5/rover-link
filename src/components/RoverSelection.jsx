import React, { useState } from 'react';

const RoverSelection = ({selectedRover, setSelectedRover}) => {


    // const [selectedRover, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedRover(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission with the selected option
        console.log('Selected option:', selectedRover);
    };

    return (
<>

        <form className="rover-select" onSubmit={handleSubmit}>
            <h2>Select Rover:</h2>
            <div>
                <input
                    type="radio"
                    id="option1"
                    name="Curiosity"
                    value="Curiosity"
                    checked={selectedRover === 'Curiosity'}
                    onChange={handleOptionChange}
                />
                <label htmlFor="option1">Curiosity</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="option2"
                    name="Opportunity"
                    value="Opportunity"
                    checked={selectedRover === 'Opportunity'}
                    onChange={handleOptionChange}
                />
                <label htmlFor="option2">Opportunity</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="option3"
                    name="Spirit"
                    value="Spirit"
                    checked={selectedRover === 'Spirit'}
                    onChange={handleOptionChange}
                />
                <label htmlFor="option3">Spirit</label>
            </div>
            
        </form>

        </>
    );
};

export default RoverSelection;
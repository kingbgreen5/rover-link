import React from 'react';

const RoverSelection = ({ selectedRover, setSelectedRover }) => {

    const handleButtonClick = (rover) => {
        setSelectedRover(rover);
    };

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
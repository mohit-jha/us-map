import React, { useState } from 'react'

function Rating() {
    const [activeButtonIndex, setActiveButtonIndex] = useState(1);

    const handleButtonClick = (buttonIndex) => {
        setActiveButtonIndex(buttonIndex);
    };

    return (
        <>
            <div className="rat_container">
                <div className='rat_title'>Assign a weight to each facor </div>
                <div className="rat_tabs">
                    <button
                        className={activeButtonIndex === 0 ? 'active' : ''}
                        onClick={() => handleButtonClick(0)}
                    >
                        <span>Factors</span>
                    </button>
                    <button
                        className={activeButtonIndex === 1 ? 'active tab_si' : 'tab_si'}
                        onClick={() => handleButtonClick(1)}
                    >
                        <span>State information</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Rating;

import React, { useState } from 'react'
import Factors from './Factors';
import Feedback from './Feedback';
import StateInformation from './StateInformation';

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
                        className={activeButtonIndex === 1 ? 'active factor_btn' : 'factor_btn'}
                        onClick={() => handleButtonClick(1)}
                    >
                        <span>Factors</span>
                    </button>
                    <button
                        className={activeButtonIndex === 0 ? 'active tab_si' : 'tab_si'}
                        onClick={() => handleButtonClick(0)}
                    >
                        <span>State Information</span>
                    </button>
                </div>
                {activeButtonIndex === 1 ? <Factors /> : <StateInformation />}
                <Feedback />
            </div>
        </>
    );
}

export default Rating;

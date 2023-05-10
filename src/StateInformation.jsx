import React from 'react'

function StateInformation() {
    return (
        <>
            <div className="factors_container state_information">
                <div className="fact_left">
                    Top 5 State Factors
                </div>
                <div className="fact_right">
                    <span>Score</span>
                    <span>Rank </span>
                </div>
            </div>
            <div className="factors_container state_information">
                <div className="fact_left">
                    Population growth
                </div>
                <div className="fact_right">
                    <span>-0.24</span>
                    <span>39</span>
                </div>
            </div>
            <div className="factors_container state_information">
                <div className="fact_left">
                    Personal Income
                </div>
                <div className="fact_right">
                    <span>$60,605.00</span>
                    <span>9</span>
                </div>
            </div>
            <div className="factors_container state_information">
                <div className="fact_left">
                    Bussiness Climate
                </div>
                <div className="fact_right">
                    <span>3.36</span>
                    <span>50</span>
                </div>
            </div>
            <div className="factors_container state_information">
                <div className="fact_left">
                    Registerd with vehichle growth
                </div>
                <div className="fact_right">
                    <span>1.10%</span>
                    <span>33</span>
                </div>
            </div>
            <div className="factors_container state_information">
                <div className="fact_left">
                    Economy
                </div>
                <div className="fact_right">
                    <span>$61,172.00</span>
                    <span>14</span>
                </div>
            </div>
            <div className="factors_container state_information brand_information">
                <div className="fact_left">
                    Top 5 Brand Factors
                </div>
                <div className="fact_right">
                    {/* <span>Not Impotant </span> */}
                    {/* <span>Very Important</span> */}
                </div>
            </div>
            <div className="factors_container state_information brand_information">
                <div className="fact_left">
                    Market Share                </div>
                <div className="fact_right">
                    <span>15%</span>

                </div>
            </div>
            <div className="factors_container state_information brand_information">
                <div className="fact_left">
                    Dealer Density                </div>
                <div className="fact_right">
                    <span>33506</span>

                </div>
            </div>
            <div className="factors_container state_information brand_information">
                <div className="fact_left">
                    Days to Turn                </div>
                <div className="fact_right">
                    <span>65</span>

                </div>
            </div>
            <div className="factors_container state_information brand_information">
                <div className="fact_left">
                    Brand Loyalty                </div>
                <div className="fact_right">
                    <span>57.20%</span>

                </div>
            </div>
            <div className="factors_container state_information brand_information">
                <div className="fact_left">
                    Brand Profitablility
                </div>
                <div className="fact_right">
                    <span>$134,245</span>

                </div>
            </div>
        </>

    )
}

export default StateInformation

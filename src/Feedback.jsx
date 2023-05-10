import React from 'react'

function Feedback() {
    return (
        <>
            <div className="feed_container">
                <div className="feed_title">
                    Do you have other recommendations?
                </div>
                <textarea rows="8" cols="50"></textarea>
                <br />
                <button type="submit">Submit</button>
            </div>
        </>
    )
}

export default Feedback
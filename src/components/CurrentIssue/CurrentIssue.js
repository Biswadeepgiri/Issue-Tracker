import React, { useState, useEffect } from "react";


// import "./App.css";
import "./CurrentIssue.css"

function CurrentIssue() {

    const [addIssue, setAddIssue] = useState(true);
    return (
        <div className="current-issues">
            <div className="indv-issue">
                <p className="close-issue">Close Issue</p>
                <p>Assigned
                    <span>Username</span>
                </p>
                <p>Priority
                    <span>High</span>
                </p>
                <p >Description
                    <p className="description-text">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </p>
                </p>
            </div>
            <hr />
            <div className="indv-issue">
                <p className="close-issue">Close Issue</p>
                <p>Assigned
                    <span>Username</span>
                </p>
                <p>Priority
                    <span>High</span>
                </p>
                <p >Description
                    <p className="description-text">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </p>
                </p>
            </div>
            <hr />
            <div className="indv-issue">
                <p className="close-issue">Close Issue</p>
                <p>Assigned
                    <span>Username</span>
                </p>
                <p>Priority
                    <span>High</span>
                </p>
                <p >Description
                    <p className="description-text">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </p>
                </p>
            </div>
            <hr />

        </div>


    );
}

export default CurrentIssue;
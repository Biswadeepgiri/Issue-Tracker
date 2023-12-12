import React, { useState, useEffect } from "react";
import AddIssue from "./components/AddIssue/AddIssue.js";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue.js";

import "./App.css";

function App() {

    const [addIssue, setAddIssue] = useState(true);

    function toggleAddIssue() {
        setAddIssue(true);

    }
    function toggleCurrentIssue() {
        setAddIssue(false);
    }
    return (
        <div className="App">
            <h1>Issue Tracker</h1>
            <div className="grey-card-container">
                {
                    addIssue ? < AddIssue /> : <CurrentIssue />

                }
            </div>
            <div className="view-selection">
                <button class="view-button" onClick={() => toggleCurrentIssue()} >Current Issues</button>
                <button class="view-button  active-button " onClick={() => toggleAddIssue()} >Add Issue</button>
            </div>


        </div >


    );
}

export default App;
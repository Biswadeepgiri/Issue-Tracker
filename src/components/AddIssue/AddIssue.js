import React, { useState } from "react";
import Axios from 'axios';


import "./AddIssue.css";

function AddIssue() {
    const [desc, setDesc] = useState(true);
    const [dev, setDev] = useState(true);
    const [priority, setPriority] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        Axios.post('http://localhost:3000/insert', {
            description: desc,
            developer: dev,
            priority: priority
        })
    }



    return (
        <div className="Add-issues">
            <form onSubmit={handleSubmit}>
                <label>Description
                    <input type="text" placeholder="Description of the Issue ...." onKeyUp={() => setDesc(document.getElementById("description").value)
                    } />


                </label>
                <label> Assign To
                    <select name="forDev" id="forDev" onChange={() => setDev(document.getElementById("forDev").value)}>
                        <option value="Dev1">Dev1</option>
                        <option value="Dev2">Dev2</option>
                        <option value="Dev3">Dev3</option>
                        <option value="Dev4">Dev4</option>
                        <option value="Dev5">Dev5</option>
                    </select>
                </label>
                <label> Issue Priority
                    <select name="priority" id="priority" onChange={() => setPriority(document.getElementById("priority").value)}>
                        <option value="Low">Low</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Extreme">Extreme</option>
                    </select>
                </label>
                <button type="submit">
                    Add</button>
            </form>

        </div>


    );
}

export default AddIssue;
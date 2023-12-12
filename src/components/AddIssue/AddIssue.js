import React, { useState, useEffect } from "react";


import "./AddIssue.css";

function AddIssue() {


    const [addIssue, setAddIssue] = useState(true);
    return (
        <div className="Add-issues">
            <form >
                <label>Description
                    <input type="text" placeholder="Description of the Issue ...." />


                </label>
                <label> Assign To
                    <select name="forDev" id="forDev">
                        <option value="Dev1">Dev1</option>
                        <option value="Dev2">Dev2</option>
                        <option value="Dev3">Dev3</option>
                        <option value="Dev4">Dev4</option>
                        <option value="Dev5">Dev5</option>
                    </select>
                </label>
                <label> Issue Priority
                    <select name="priority" id="priority">
                        <option value="Low">Low</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Extreme">Extreme</option>
                    </select>
                </label>
                <button type="submit">Add</button>
            </form>

        </div>


    );
}

export default AddIssue;
import React from 'react';
import "./userInput.css"

const userInput = (props) => {

    return (
        <div className="userInput">
            <span className="label">Enter Something</span>
            <input type="text" onChange={props.changed} value={props.username}/>
        </div>
    );
}

export default userInput;
import React from 'react';
import './userOutput.css';

const userOutput = (props) => {

    var p1Msg = "Username: " + props.username;

    if(props.username == undefined || props.username == "")
    {
        p1Msg = "Msg: Please login first!";
    }

    return (
        <div className="userOutput">
            <p id="p1">{p1Msg}</p>

            <b><p id="p2">
                {props.initialB}
            </p></b>
        </div>
    );
}

export default userOutput;
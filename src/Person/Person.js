import React from 'react';
import './person.css';

const person = (props) => {

    var ageStr = props.age < 18 ? "young" : "old";

    return(

    <div className={"person "+ageStr} onClick={props.click}>
        <div className="person-content">
            <h2>{props.name}</h2>
            <p>Age: {props.age} years </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    </div>
    );
}

export default person;
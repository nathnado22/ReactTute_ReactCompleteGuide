import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
//import { render } from 'react-dom';

class App extends Component {
    state = ({
      persons: [
        { name : 'Nathan', age: 24, hobbies : "Coding"},
        { name : 'Jasmine',age:25, hobbies : "Sleeping"},
        { name : 'Jonathan', age:1, hobbies : "Getting born"}
      ],
      username : "Nathan"
    });

    newPersonsDetails = [
      { name : 'Nathaniel', age: 23},
      null,
      null
    ]

    switchNameHandler = (newInfoName) => {
      console.log('Clicked button!');
      //DONT DO THIS: this.state.persons[0].Name = "Nathaniel";
      this.setState({
        persons: [
          { name : (newInfoName != null) ? newInfoName : "Nathan", age: 24, hobbies : "Coding"},
          { name : 'Jasmine',age:25, hobbies : "Sleeping"},
          { name : 'Jonathan', age:1, hobbies : "Getting born"}
        ]
      })
    }

    nameChangedHandler = (event) => {
      this.setState({
        persons: [
          { name : (event.target.value != null) ? event.target.value : "Nathan", age: 24, hobbies : "Coding"},
          { name : 'Jasmine',age:25, hobbies : "Sleeping"},
          { name : 'Jonathan', age:1, hobbies : "Getting born"}
        ]
      })
      this.forceUpdate();
    }

    usernameUpdatedHandler = (event) => {
      this.setState({
        //persons: _state.perons
        username : event.target.value
      })
      this.forceUpdate();

      console.log("new username: "+this.state.username);
    }

  

  render() {

    var [_persons,_username] = [this.state.persons,this.state.username]
    var personComps = [];
    var outputComps = [];

    outputComps.push(
      <UserOutput 
        key={0}
        id="uo1"
        username={_username}
        initialB ="
        Hello world (B)
        "
      />
    );

    outputComps.push(
      <UserOutput 
        key={1}
        id="uo2"
        username={_username}
        initialB ="
        Hello world (B)
        "
      />
    );

    outputComps.push(
      <UserOutput 
        key={2}
        id="uo3"
        username={_username}
        initialB ="
        Hello world (B)
        "
      />
    );

    for(var i = 0; i < _persons.length; i++)
    {
        var personInfo = _persons[i];

        var newPerson = 
        <Person key={i}
          id={i} 
          name={personInfo.name} 
          age={""+personInfo.age}
          //click={this.switchNameHandler.bind(this,"Nathaniel")}
          changed={this.nameChangedHandler}>
          Hobbies: {personInfo.hobbies}
        </Person>

        personComps.push(newPerson);
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>

        <p> My code isn't sh*t!</p>

        <button onClick={() => this.switchNameHandler("Nathan")}>Switch Name</button>
          
          {personComps}

        <hr width="50%"/>

          <UserInput changed={this.usernameUpdatedHandler} username={_username}/>

          {outputComps}
      </div>
    );
  }

}

export default App;

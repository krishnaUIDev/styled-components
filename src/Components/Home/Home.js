import React, { Component } from 'react'

class Home extends Component {
    render() {
        //if statements
        //ternery opertators
    var user = {
        Firstname: "krishna",
        first: "kanth",
        Lastname: "konodju",
        age: "23"
    }
    function getLastname(Lastname){
        if (Lastname) {
            return Lastname;
        }else{
            return 'unKnown';
        }
    }
        return (
           
            <div>
                My firstname is {user.Firstname ? user.Firstname : user.first} <br/>
                My lastname is {getLastname(user.Lastname)}
  {(user.age && user.age <= 18) && user.age}
            </div>
        )
    }
}

export default Home
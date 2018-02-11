import React, { Component } from 'react'

class Home extends Component {
    render() {
        //if statements
        //ternery opertators
    var user = {
        Firstname: "krishna",
        first: "kanth",
        Lastname: "konodju",
        age: "23",
        options: ['one','two']
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
                
                <p>{user.options.length>0 ? 'here are your options' : 'No options'}</p>
            </div>
        )
    }
}

export default Home
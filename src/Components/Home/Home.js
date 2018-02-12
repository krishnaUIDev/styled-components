import React, { Component } from 'react'

class Home extends Component {
    render() {
        //if statements
        //ternery opertators
    // var username = "hacker";
    // username = 'mike';
    //     console.log("username", username);
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
// const fullname = (fullname)=> {
//  return fullname;
// }
// console.log(fullname('krishna'));
  
// const add = (a,b) => {
//     return a+b;
// }
// console.log(add(1,2));


// const qw = (a,b) => a+b ;
// console.log(qw(30,34));

const userr = {
    name: 'Andrew',
    location: ['phli','hyd'],
Place :  function(){
 console.log(this.name);
 console.log(this.location);
}

}
console.log(userr.Place);

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
import React, { Component } from 'react'

class Home extends Component {
    render() {
    var user = {
        Firstname: "krishna",
    }
        return (
           
            <div>
                this is{user.Firstname}
            </div>
        )
    }
}

export default Home
import React, { Component } from 'react'

export default class ComponentC extends Component {

    constructor(props){
        super(props);
       
        this.state = {
            date: '28-01-2020'
        }
    }

    render() {
        return (
            <div>
                <p>Hi ComponentC's first name is {this.props.fname} and last name is {this.props.lname}</p>
                <p>Completion date: {this.state.date}</p>
            </div>
        )
    }
}


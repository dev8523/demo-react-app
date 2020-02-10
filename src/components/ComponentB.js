import React, { Component } from 'react'
import ComponentC from './ComponentC';

export default class ComponentB extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            fname: this.props.fname,
            lname: this.props.lname,
            email: 'deba@gmail.com',
            phone: '1234567890'
        }
    }
    
    render() {
        return (
            <div>
                <p>Hi ComponentB's First name is {this.state.fname} and last name is {this.state.lname}</p>
                <p>ComponentB's email is: {this.state.email}</p>
                <p>ComponentB's phone number is: {this.state.phone}</p>
                <ComponentC fname={this.state.fname} lname={this.state.lname} />
            </div>
        )
    }
}

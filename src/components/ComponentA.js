import React, { Component } from 'react'
import ComponentB from "./ComponentB"

export default class ComponentA extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            fname: 'deba',
            lname: 'sahoo'
        }
    }  
        
    render() {
        return (
            <div>
                <p>Hi ComponentA's First name is {this.state.fname} and last name is {this.state.lname}</p>
                <ComponentB fname={this.state.fname} lname={this.state.lname}/>
            </div>
        )
    }
}


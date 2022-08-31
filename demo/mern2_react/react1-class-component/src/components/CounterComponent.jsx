import React, { Component } from 'react'

export class CounterComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            count : 0,
            likes : 100
        }
    }
    render() {

        const alertWednesday = (msg) => {
            alert(msg)
        }

        const addLikes = ()=>{
            this.setState({likes : this.state.likes +1})
        }

        return (
            <fieldset>
                <legend> CounterComponent.jsx</legend>
                <button onClick={() => alert("Hi")}> Alert me</button>
                <button onClick={() => alertWednesday("Hiiiiiii")}> Alert Wednesday</button>

                <button onClick={()=>
                    this.setState({count: this.state.count+1})
                }> Add count</button>

                <button onClick={addLikes}>Add Likes</button>

                <h1> this.state.count : {this.state.count}</h1>
                <h1> this.state.likes : {this.state.likes}</h1>
            </fieldset>
        )
    }
}

export default CounterComponent
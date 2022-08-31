import React, { Component } from 'react'
import Header from "./../components/Header"
import Footer from "./../components/Footer"
import Main from "./../components/Main"


export class Container extends Component {

    render() {
        console.log(this.props)
        return (
            <fieldset>
                <legend> Container.jsx</legend>
                <Header />
                <Main />
                <Footer />
                {this.props.children}


            </fieldset>
        )
    }
}

export default Container
import React, { Component } from 'react'
// 1. direct import
import './../css/styles.css'

// 3. css modules
import styles from './StylingComponent.module.css'

const inline3 = {
    backgroundColor : "saddleBrown",
    color: "white"
}

export class StylingComponent extends Component {

  render() {
    const inline2 = {
        backgroundColor : this.props.newBackgroundColor,
        color: "white"
    }


    return (
      <div>
        <button className='btn btn-primary'> Bootstrap button</button>
        <h1> 3 different ways to import css</h1>
        <p className='directImport'> 1. directImport</p>
        <p style={{backgroundColor: "rebeccapurple", color: "white"}}> 2.1 inlineStyle in style</p>
        <p style={inline2}> 2.2 inlineStyle with an object up</p>
        <p style={inline3}> 2.3 inlineStyle with an object outside class</p>
        <p className={styles.cssmodule}> 3 css module</p>
      </div>
    )
  }
}

export default StylingComponent
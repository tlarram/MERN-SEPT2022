import React from 'react'

export const SiblingDisplay = (props) => {
  return (
    <fieldset style={{backgroundColor: "darkseagreen"}}>
        <legend> SiblingDisplay.jsx</legend>
        <h1>Count at display: {props.count} </h1>
    </fieldset>
  )
}

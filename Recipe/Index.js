import React from 'react'
import { render } from 'react-dom'
import Menu from './Menu'
import data from './Recipe'

window.React = React

render(
    <Menu recipes={data} />, 
    document.getElementById("react-container")
)
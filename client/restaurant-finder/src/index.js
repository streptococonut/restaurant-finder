
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SimpleExample, { App } from './App'

import 'leaflet/dist/leaflet.css';


ReactDOM.render(<div><SimpleExample /></div>, document.getElementById('container'))
ReactDOM.render(<App/>, document.getElementById('root'))
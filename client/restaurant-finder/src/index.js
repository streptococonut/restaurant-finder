
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import SimpleExample from './LeafletMap'
import 'leaflet/dist/leaflet.css';

ReactDOM.render(<App/>, document.getElementById('root'))
ReactDOM.render(<div><SimpleExample /></div>, document.getElementById('container'))

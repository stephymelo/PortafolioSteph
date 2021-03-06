import React from 'react'
import ReactDOM from 'react-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import App from './Components/App/App'

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
    <App />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

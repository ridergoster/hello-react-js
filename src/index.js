import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const app = document.getElementById('app')

app.innerHTML = '<div>hello world</div>'

ReactDOM.render(<App />, app)

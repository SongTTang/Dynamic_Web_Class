import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavigationProvider } from './context/navigation'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <NavigationProvider>
        <App />
    </NavigationProvider>)

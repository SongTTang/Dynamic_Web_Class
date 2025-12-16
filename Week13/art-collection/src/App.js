import React from 'react'
import ArtForm from './components/ArtForm'
import ArtList from './components/ArtList'
import ArtSearch from './components/ArtSearch'
import ArtValue from './components/ArtValue'

const App = () => {
  return <div>
    <ArtForm/>
    <ArtSearch/>
    <ArtList/>
    <ArtValue/>
  </div>
}

export default App

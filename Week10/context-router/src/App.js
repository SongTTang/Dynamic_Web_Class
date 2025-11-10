import React from 'react'
import Menu from './components/Menu'
import Route from './components/Route'
// import the pages to reder for each route
import CatsPage from './pages/CatsPage'
import ChickenPage from './pages/ChickenPage'
import CagePage from './pages/CagePage'
import WuTangPage from './pages//WuTangPage'


const App = () => {
  return <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
    <Menu />
    {/* this 5 col span will hold each page */}
    <div className="col-span-5">
      {/* this is where we will put our routes and what each one should render */}
      <Route path="/">
        <CatsPage />
      </Route>

      <Route path="/chicken">
        <ChickenPage />
      </Route>

      <Route path="/cage">
        <CagePage />
      </Route>
      
      <Route path="/wutang">
        <WuTangPage />
      </Route>

    </div>
  </div>
}

export default App

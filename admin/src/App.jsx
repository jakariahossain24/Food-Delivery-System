import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/sidebar';

const App = () => {
  return (
   <>
    <Navbar/>
    <hr />
    <div className="app-content">
      <Sidebar/>
    </div>
   </>
  )
}

export default App
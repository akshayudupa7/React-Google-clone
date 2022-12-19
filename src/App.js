import React from "react"
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Switch from './component/Switch'

function App() {
 
  return (
    <div className='s'>
    <div className="App  bg-white dark:bg-gray-800 dark:text-white">
        <Navbar/>
         <Switch />
        <Footer/>

  
    </div>
    </div>
  );
}

export default App;

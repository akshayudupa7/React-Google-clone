import {Routes,Route} from 'react-router-dom';
import React from 'react'
import Results from './Results'

 const Switch= () => {
  return (
    <div>
 
      <Routes>
      
        <Route exact path='/search' element={<Results/>}/>
        <Route exact path='/images' element={<Results/>}/>
        <Route exact path='/news' element={<Results/>}/>
    
      </Routes>
 
    </div>
  )
}
export default Switch
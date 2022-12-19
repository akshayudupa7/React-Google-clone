import React from 'react'
import Search from './Search'
import { NavLink } from 'react-router-dom'

const links=[
    {
        url:'/search',
        title:' 🔍 All' 
      
    },
   {
        url:'/images',
        title:' 🖼️ Images'
    },
    {
        url:'/news',
        title:' 📰 News'
    },
  

]

 const Navigation = () => {
  return (
    <div className=''>
        <div className='w-full mt-2'>
            <Search/>
          </div>
        <div className='mb-4 '>
        
          {
            links.map(({url,title})=>(
                  <NavLink  to={url} className='text-blue-700 px-2 hover:border-b-2 border-b-violet-800'>{title}</NavLink>
            ))
          }
        </div>
    </div>
  )
}
export default Navigation 
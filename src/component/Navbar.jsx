import React from 'react'
import  Navigation from './Navigation'

const Navbar = () => {
  return (
    <>
    <div className='sticky top-0 border-2 border-b-stone-100 bg-stone-100'>
    <div className='flex flex-start ' >
      <div className='mt-4 pl-4'>
        <img src='https://www.google.com/logos/doodles/2022/celebrating-maria-telkes-6753651837109453-s.png' alt="google_image"/>
      </div>
    </div>
    <div className='flex justify-center'>
      <Navigation/>
    </div>
    </div>
    </>
  )
}
export default Navbar
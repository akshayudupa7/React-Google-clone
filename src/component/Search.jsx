import React ,{useState,useEffect} from 'react'
import  {useDebounce} from 'use-debounce';
import { useDataContext } from '../ContextApi'


 const Search = () => {
  let {setSearchTerm}= useDataContext()
     let[text,setText]=useState()  
     let [Debounce]= useDebounce(text,3000)

useEffect(()=>{
  if(Debounce) return setSearchTerm(Debounce)
},[Debounce])
  return (
    <>
    
    <div className='w-full  mb-4'>
      <input type="text"
          placeholder='search'
          className='outline-none border-2 border-gray-300 rounded-xl py-1 px-2 w-60  shadow  hover:shadow-xl'
          value={text}
          onChange={(e)=>setText(e.target.value)}/>
    
    </div>
     
   </>
  )
}
export default Search
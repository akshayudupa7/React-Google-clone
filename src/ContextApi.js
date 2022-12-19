import { createContext,useContext,useState } from "react"
import axios from "axios"



const dataContext=createContext();

let BASE_URL='https://contextualwebsearch-websearch-v1.p.rapidapi.com/api'

export const DataContextFile=({children})=>{
      let [result,setResult]=useState([])
     let [loading,setLoading]=useState(false)
      let [searchTerm,setSearchTerm]=useState('')

    const  fetchResult=async(url)=>{
      setLoading(true)
  const options = {
 
    headers: {
      'X-RapidAPI-Key': '1a235c98ebmsh93d6f5f25f578c1p1d6fbbjsn0cdcaeb662bb',
      'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
  };
  
  let response=await axios.get(`${BASE_URL}${url}`, options)
     
       
      setResult(response.data)
       setLoading(false)
    }
    console.log(fetchResult)
    return(
      <dataContext.Provider value={{result ,searchTerm,loading ,setSearchTerm ,fetchResult}}>
           {children}
      </dataContext.Provider>
      )
    
  }
 
export const useDataContext=()=>useContext(dataContext)
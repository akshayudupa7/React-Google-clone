import { createContext,useContext,useState } from "react"

const dataContext=createContext();

/*let base='https://google-search72.p.rapidapi.com';*/
/*let base='https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search'*/

let base='https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI'

 export const DataContextFile=({children})=>{
      
    /*let [result,setResult]=useState([])*/
    let [Loading,setLoading]=useState(false)
    let [searchTerm,setSearchTerm]=useState('')
  
    let fetchResult=async(url)=>{
        setLoading(true)
         /*let response=await fetch( `${base}${url}`,{
            method:"GET",
             headers:{
              
                'x-rapid-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
                'x-rapidapi-key': '61b26ec4f2msh8a29883960a4c2ep1bb479jsna0797948ba6a',
             },
         });
          let data= await response.json()
          setResult(data)
          console.log(data)*/
 
       
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '61b26ec4f2msh8a29883960a4c2ep1bb479jsna0797948ba6a',
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    };
    
    fetch(`${base}${url}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return(
        <dataContext.Provider value={{Loading ,searchTerm ,setSearchTerm ,fetchResult}}>
             {children}
        </dataContext.Provider>
        )
}





  /*  export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
 
    const options = {
      params: {
        maxResults: 50,
      },
      headers: {
        'X-RapidAPI-Key': '61b26ec4f2msh8a29883960a4c2ep1bb479jsna0797948ba6a',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    };
    
    export const FetchApi = async (url) => {
      const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    
      return data;
    };*/
 }
 export const useDataContext=()=>useContext(dataContext)
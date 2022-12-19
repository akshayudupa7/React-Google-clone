import React ,{useEffect} from 'react'

import { useDataContext } from '../ContextApi';
import Loading from  './Loading'



const Results = () => {
    const {result,loading,fetchResult,searchTerm}=useDataContext()
 
    useEffect(()=>{
      if(window.location.pathname==='/search'){
         fetchResult(`/Search/WebSearchAPI?q=${searchTerm}&pageNumber=1&pageSize=10&autoCorrect=true`)
          }
          if(window.location.pathname==='/images'){
            fetchResult(`/Search/ImageSearchAPI?q=${searchTerm}&pageNumber=1&pageSize=10&autoCorrect=true`)
         } 
        if(window.location.pathname==='/news'){
           fetchResult(`/search/NewsSearchAPI?q=${searchTerm}&pageNumber=1&pageSize=10&autoCorrect=true`)
        } 
         
    },[searchTerm,window.location.pathname])
  
 
       console.log(window.location.pathname)
       console.log('searchTerm')
       console.log(result)
       
       if(loading) return <Loading/>

       switch (window.location.pathname){
         case '/search':
       return(
             <div>
                 <div className='flex flex-col w-full flex-wrap justify-center m-auto w-full'>
                  
                     {
                     
                        result?.value?.map(({title,url,description})=>(
                           <div className=' flex flex-col m-auto mt-2 mb-6 w-full  sm:w-3/5'>
                            <a href={url} className='text-emerald-900  text-sm '><span className='hidden sm:block'> {url}</span> 
                           <p className='hover:underline text-2xl text-blue-900 '>
                              {title}
                           </p>
                          </a>
                            <p className='text-gray-800'>
                              {description?.length>140?description.substring(0,140):description}...
                           </p>
                           </div>
                        ))
                     
                     }

                 </div>
             </div>
       )
        case '/images':
         return(
            <div>
               <div className='flex w-full p-1'>
                  
                          
                          <div className='flex flex-wrap justify-start gap-6 w-full flex-row'>
                        {
                              result?.value?.map(({title,url,webpageUrl})=>(
                                 <div>
                                    <a href={webpageUrl}>
                                       <img src={url} className="w-56 h-44 rounded-xl hover:shadow-md hover:shadow-blue-300" alt="new_image"/>
                                       <p className='hover:underline text-center text-gray-700 dark:text-gray-100'>{title?.length>24?title.substring(0,24):title}...</p>
                                    </a>
                                 </div>
                                  ))
                        }
                           </div>
                    
                 
               </div>
              
            </div>
         )
         case '/news':
            return(
               <div>
                  <div>
                            {
                        result?.value?.map(({title,url,image,description,datePublished,provider:{name}},index)=>(
                         <div>
                            <a href={url} className='flex flex-col flex-wrap lg:w-3/5 sm:w-full md:w-full  m-auto mb-4 p-4 border-b-2 border-t-stone-100'>
                             <div className='mx-auto'>
                                 <img src={image?.url} className="w-16 h-14 rounded-xl  hover:shadow-md hover:shadow-blue-300" alt="news_image"/>
                              </div>
                              <div className='flex flex-col md:flex-wrap pl-6'>
                              <p className='text-sm text-emerald-900 '>{name}</p>
                              <h5 className=' text-xl text-blue-900 hover:underline'>{title}</h5>
                              <p className='text-md text-gray-800 mt-1 mb-2'>{description}</p>
                              <p className='text-sm text-gray-500'>{datePublished}</p>

                              </div>
                            </a>
                          </div>
                        ))
                     }
                         
                   </div>
            </div>
            )
       default :
         return 'error';
       }
  
        
}
export  default  Results
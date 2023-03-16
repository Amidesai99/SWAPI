import React, { useEffect, useState } from 'react';
 import axios from 'axios';
import Character from './Character';
import Header from '../ui/Header';




const People=()=> {

    const[people,setPeople] = useState([])
    
    
    useEffect(()=>{
// tried accessing al the pages of api but resulted into duplication of values
      // const fetchData = async (url) => {
      //   const res = await fetch(url);
      //   const data = await res.json();
      //   setPeople((_people) => {
      //     return [..._people, ...data.results];
      //   });
      //   if (data.info && data.info.next) {
      //     fetchData(data.info.next);
      //   }
      
      const fetchData = async () => {
        
        const result = await axios(`https://swapi.dev/api/people/`)
  
        console.log(result.data.results)
        setPeople(result.data.results)
  
        
        
       }
  
       fetchData()
    }, [])
      
      
      

  return (
    <div className='container'>
        <Header />
        <Character people={people} />
        
      
    </div>
    
  )
}

export default People
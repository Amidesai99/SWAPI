import React from 'react'
import axios from 'axios';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';




function CharacterItem({item}) {

  const [vehicles,setVehicles]=useState([]);

  const getVehicles = useCallback(async () =>{
    let promises=[];
    let vehicles=[];
    if(item.vehicles){
        for(let vehicle of item.vehicles){
            promises.push(
                await axios.get(vehicle)
                    .then((response)=>{
                        vehicles.push(response.data.name);
                    })
            )
        }
        Promise.all(promises).then(()=>setVehicles(vehicles))
    } 
},[item.vehicles])

useEffect(()=>{
    getVehicles();
    
},[getVehicles])

  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
        <h1>{item.name}</h1>
          <ul>
            <li>
              <strong> Height:</strong> {item.height}
            </li>
            <li>
              <strong> Mass:</strong> {item.mass}
            </li>
            <li>
              <strong> Hair Color:</strong> {item.hair_color}
            </li>
            <li>
              <strong> Birth Year:</strong> {item.birth_year}
            </li>
            <li>
              <strong> Gender:</strong> {item.gender}
            </li>
          </ul>
          
        </div>
        <div className='card-back'>
        <h1>Vehicles</h1>
        {item.vehicles.length>0 ?
                 vehicles.map((vehicle)=>(
                     <div  key={vehicle}>
                                             
                         <p >{vehicle}</p>
                     </div>
                            ))
                                        
                        :
                     <div >
                                               
                        <p >None</p>
                                       
                    </div>
        }
          
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
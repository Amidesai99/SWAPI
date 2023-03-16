import React from 'react'
import CharacterItem from './CharacterItem'

function Character({people}) {
  return (
    <div>
    <section className='cards'>
    {people.map((item,index) => (
      <CharacterItem key={index} item={item}></CharacterItem>
    ))}

  </section>  </div>
  )
}

export default Character
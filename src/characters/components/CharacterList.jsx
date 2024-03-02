import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { CharacterCard } from './CharacterCard';
import { Pagination } from './Pagination';
import { useCounter } from '../hooks/useCounter';

export const CharacterList = () => {

  const {number, increment, decrement} = useCounter();
  const {result} = useFetch(`https://api.attackontitanapi.com/characters?page=${number}`);

  return (
    <div 
      className="container"
    >
      <div className="row justify-content-center row-cols-2 row-cols-lg-4 mt-4">
        {result && result.map(char => (
          <CharacterCard
            key={char.id}
            {...char}
          />
        ))}
      </div>
      <Pagination 
        number={number} 
        increment={increment} 
        decrement={decrement} 
      />
    </div>
  )
}

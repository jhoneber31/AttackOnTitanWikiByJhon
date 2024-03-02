import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { TitanCard } from './TitanCard';

export const TitansList = () => {

  const {result} = useFetch('https://api.attackontitanapi.com/titans');
  return (
    <div className='container'>
      <div className="row justify-content-center row-cols-2 row-cols-lg-4 mt-4">
        {result && result.map(char => (
          <TitanCard
            key={char.id}
            {...char}
          />
        ))}
      </div>
    </div>
  )
}

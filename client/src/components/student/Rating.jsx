import React, { useEffect, useState } from 'react'

const Rating = ({initialRating, onRate}) => {

    const [rating, setRating] = useState(initialRating || 0)

    const handleRating = (value) => {
      setRating(value);
      if(onRate) onRate(value)
    }

    useEffect(() => {
      if(initialRating){
        setRating(initialRating)
      }
    },[initialRating])

  return (
    <div>
      {Array.from({length: 5}, (_, index)=> {
        const starvalue = index + 1;
        return (
          <span key={index} className={`text-xl sm:text-2xl cursor-pointer transition-colors ${starvalue <= rating ? 'text-yellow-500' : 'text-gray-400'}`} onClick={()=> handleRating(starvalue)}>
            &#9733;
          </span>
        )
      })}
    </div>
  )
}

export default Rating

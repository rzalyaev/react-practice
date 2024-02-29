import React, {useState} from "react";
import {Star} from "../Star/Star";

type RatingType = 0 | 1 | 2 | 3 | 4 | 5

export const UncontrolledRating = () => {
  const [rating, setRating] = useState<RatingType>(0);

  return (
      <div>
        <h3>Uncontrolled rating</h3>
        <h4>State is managed from the <u>inside</u> of a component</h4>
        <div>
          <Star selected={rating >= 1} onClick={() => setRating(1)}/>
          <Star selected={rating >= 2} onClick={() => setRating(2)}/>
          <Star selected={rating >= 3} onClick={() => setRating(3)}/>
          <Star selected={rating >= 4} onClick={() => setRating(4)}/>
          <Star selected={rating === 5} onClick={() => setRating(5)}/>
        </div>
      </div>
  )
}
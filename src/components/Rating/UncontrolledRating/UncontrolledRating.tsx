import React, {useState} from "react";
import {Star} from "../Star/Star";

type RatingType = 0 | 1 | 2 | 3 | 4 | 5

export const UncontrolledRating = () => {
  const [rating, setRating] = useState<RatingType>(0);

  const oneStarHandler = () => {
    if (rating === 1) {
      setRating(0);
    } else {
      setRating(1);
    }
  }

  return (
      <>
        <h3>Uncontrolled rating (rating can be changed)</h3>
        <div>
          <Star selected={rating >= 1} changeRating={oneStarHandler}/>
          <Star selected={rating >= 2} changeRating={() => setRating(2)}/>
          <Star selected={rating >= 3} changeRating={() => setRating(3)}/>
          <Star selected={rating >= 4} changeRating={() => setRating(4)}/>
          <Star selected={rating === 5} changeRating={() => setRating(5)}/>
        </div>
      </>
  )
}
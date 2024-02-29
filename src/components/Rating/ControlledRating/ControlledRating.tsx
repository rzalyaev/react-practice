import React from "react";
import {Star} from "../Star/Star";
import {RatingType} from "../../../App";

type ControlledRatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
  changeRating: (newRating: RatingType) => void
}

export const ControlledRating = ({value, changeRating}: ControlledRatingPropsType) => {


  return (
      <div>
        <h3>Controlled rating</h3>
        <h4>State is managed from the <u>outside</u> of a component</h4>
        <div>
          <Star selected={value >= 1} onClick={() => changeRating(1)}/>
          <Star selected={value >= 2} onClick={() => changeRating(2)}/>
          <Star selected={value >= 3} onClick={() => changeRating(3)}/>
          <Star selected={value >= 4} onClick={() => changeRating(4)}/>
          <Star selected={value === 5} onClick={() => changeRating(5)}/>
        </div>
      </div>
  )
}
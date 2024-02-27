import React from "react";

type ControlledRatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}

export const ControlledRating = (props: ControlledRatingPropsType) => {
  console.log('ControlledRating is rendering');
  return (
      <>
        <h3>Controlled rating (rating fixed at {props.value})</h3>
        <div>
          <Star selected={props.value >= 1}/>
          <Star selected={props.value >= 2}/>
          <Star selected={props.value >= 3}/>
          <Star selected={props.value >= 4}/>
          <Star selected={props.value === 5}/>
        </div>
      </>
  )
}

type StarPropsType = {
  selected: boolean
}

const Star = (props: StarPropsType) => {
  console.log('Star is rendering');

  if (props.selected) {
    return <span><b>star</b> </span>
  } else {
    return <span>star </span>
  }
}
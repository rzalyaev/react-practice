import React from "react";
import {Star} from "./Star/Star";

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

type PropsType = {
    rating: RatingType
    setRating: (newRatingValue: RatingType) => void
}

const RatingComponent = (props: PropsType) => {
    return(
        <div>
            <h3>Controlled Rating</h3>
            <Star selected={props.rating > 0} setRating={() => props.setRating(1)}/>
            <Star selected={props.rating > 1} setRating={() => props.setRating(2)}/>
            <Star selected={props.rating > 2} setRating={() => props.setRating(3)}/>
            <Star selected={props.rating > 3} setRating={() => props.setRating(4)}/>
            <Star selected={props.rating > 4} setRating={() => props.setRating(5)}/>
        </div>
    )
}

export const Rating = React.memo(RatingComponent);
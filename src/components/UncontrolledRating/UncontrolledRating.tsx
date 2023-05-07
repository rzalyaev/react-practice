import React, {useState} from "react";
import {UncontrolledStar} from "./UncontrolledStar/UncontrolledStar";

export const UncontrolledRating = () => {
    const [rating, setRating] = useState(0);

    const setRatingCallback = (value: number) => {
        setRating(value)
    }

    return(
        <div>
            <UncontrolledStar value={1} selected={rating > 0} onClickCallback={setRatingCallback}/>
            <UncontrolledStar value={2} selected={rating > 1} onClickCallback={setRatingCallback}/>
            <UncontrolledStar value={3} selected={rating > 2} onClickCallback={setRatingCallback}/>
            <UncontrolledStar value={4} selected={rating > 3} onClickCallback={setRatingCallback}/>
            <UncontrolledStar value={5} selected={rating > 4} onClickCallback={setRatingCallback}/>
        </div>
    )
}
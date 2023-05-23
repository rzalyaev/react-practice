import React, {useState} from "react";
import {UncontrolledStar} from "./UncontrolledStar/UncontrolledStar";
import {RatingType} from "../Rating/Rating";

const UncontrolledRatingComponent = () => {
    const [rating, setRating] = useState<RatingType>(0);

    return(
        <div>
            <h3>Uncontrolled Rating</h3>
            <UncontrolledStar selected={rating > 0} setRating={() => setRating(1)}/>
            <UncontrolledStar selected={rating > 1} setRating={() => setRating(2)}/>
            <UncontrolledStar selected={rating > 2} setRating={() => setRating(3)}/>
            <UncontrolledStar selected={rating > 3} setRating={() => setRating(4)}/>
            <UncontrolledStar selected={rating > 4} setRating={() => setRating(5)}/>
        </div>
    )
}

export const UncontrolledRating = React.memo(UncontrolledRatingComponent);
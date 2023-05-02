import React from "react";
import {Star} from "./Star/Star";

type PropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: PropsType) => {
    return(
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}
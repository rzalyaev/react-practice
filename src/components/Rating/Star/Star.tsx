import React from "react";

type PropsType = {
    selected: boolean
}

export const Star = (props: PropsType) => {
    return(
        <span>{props.selected ? <b>star</b> : <>star</>} </span>
    )
}
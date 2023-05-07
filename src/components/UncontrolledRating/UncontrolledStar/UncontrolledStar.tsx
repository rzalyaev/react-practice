import React from "react";

type PropsType = {
    value: 1 | 2 | 3 | 4 | 5
    selected: boolean
    onClickCallback: (value: number) => void
}

export const UncontrolledStar = (props: PropsType) => {
    return(
        <span onClick={() => {props.onClickCallback(props.value)}}>{props.selected ? <b>star</b> : <>star</>} </span>
    )
}
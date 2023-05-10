import React from "react";
import styles from "./Star.module.css";

type PropsType = {
    selected: boolean
    setRating: () => void
}

export const Star = (props: PropsType) => {
    const onClickHandler = () => props.setRating()
    const selectedStarClassName = `${styles.star} ${props.selected && styles.selectedStar}`

    return(
        <span className={selectedStarClassName} onClick={onClickHandler}>
            {props.selected ? <b>star</b> : "star"}
        </span>
    )
}
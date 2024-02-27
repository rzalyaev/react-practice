import React from "react";
import styles from './Star.module.css';

type StarPropsType = {
  selected: boolean
  changeRating?: () => void
}

export const Star = ({selected, changeRating}: StarPropsType) => {
  const selectedButtonClassName = `${styles.starButton} ${selected ? styles.selected : ''}`

  return (
      <button className={selectedButtonClassName} onClick={changeRating}>star</button>
  )
}
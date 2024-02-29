import React from "react";
import styles from './Star.module.css';

type StarPropsType = {
  selected: boolean
  onClick?: () => void
}

export const Star = ({selected, onClick}: StarPropsType) => {
  const selectedButtonClassName = `${styles.starButton} ${selected ? styles.selected : ''}`

  return (
      <button className={selectedButtonClassName} onClick={onClick}>star</button>
  )
}
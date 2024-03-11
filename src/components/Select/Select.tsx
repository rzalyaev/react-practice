import React, {useState, KeyboardEvent} from "react";
import styles from './Select.module.css';
import expandArrow from '../_assets/icons8-expand-arrow-15.png';
import {ItemType} from "../Accordion/ControlledAccordion/ControlledAccordion";

type SelectPropsType = {
  value?: string
  onChange: (value: string) => void
  items: ItemType[]
}

export const Select = ({value, onChange, items}: SelectPropsType) => {
  const [collapsed, setCollapsed] = useState(true);
  const [hoveredItemValue, setHoveredItemValue] =
      useState<string>(value || items[0].value);
  const selectedItemTitle = items.find(item => item.value === value);
  const handleOnClick = () => {
    setCollapsed(!collapsed);
    if (hoveredItemValue !== value) {
      if (value !== undefined) {
        setHoveredItemValue(value);
      } else {
        setHoveredItemValue(items[0].value);
      }
    }
  }
  const handleOnKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      setCollapsed(!collapsed);
      onChange(hoveredItemValue);
    }
    if (event.key === 'ArrowDown') {
      if (hoveredItemValue === items[items.length - 1].value) {
        setHoveredItemValue(items[0].value);
      } else {
        setHoveredItemValue(String(Number(hoveredItemValue) + 1));
      }
    }
    if (event.key === 'ArrowUp') {
      if (hoveredItemValue === items[0].value) {
        setHoveredItemValue(items[items.length - 1].value);
      } else {
        setHoveredItemValue(String(Number(hoveredItemValue) - 1));
      }
    }
  }

  const mappedItems = items.map(i => {
    const chooseItem = (newValue: string) => {
      onChange(newValue);
      setCollapsed(!collapsed);
    }
    const handleOnClick = () => chooseItem(i.value);
    const handleOnMouseEnter = () => setHoveredItemValue(i.value);

    const itemClassName: string = hoveredItemValue === i.value
        ? `${styles.itemToSelect} ${styles.selectedItem}`
        : styles.itemToSelect;

    return (
        <div onClick={handleOnClick} onMouseEnter={handleOnMouseEnter} className={itemClassName}>{i.title}</div>
    )
  });

  const selectedClassName: string = `${styles.selected} ${!collapsed && styles.expanded}`;

  return (
      <div className={styles.wrapper} tabIndex={0} onKeyUp={handleOnKeyUp}>
        <div onClick={handleOnClick} className={selectedClassName}>
          {selectedItemTitle?.title || items[0].title}
          <img src={expandArrow} alt='expand arrow'/>
        </div>
        {!collapsed && mappedItems}
      </div>
  )
}
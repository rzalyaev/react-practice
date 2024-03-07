import React, {useState, KeyboardEvent} from "react";
import styles from './Select.module.css';
import {ItemType} from "../Accordion/ControlledAccordion/ControlledAccordion";

type SelectPropsType = {
  value: any
  onChange: (value: any) => void
  items: ItemType[]
}

export const Select = ({value, onChange, items}: SelectPropsType) => {
  const [collapsed, setCollapsed] = useState(true);
  const selectedItemTitle = items.find(item => item.value === value);
  const handleOpenCloseSelectByClick = () => setCollapsed(!collapsed);
  const handleOpenCloseSelectByEnterPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      setCollapsed(!collapsed);
    }
  }
  const mappedItems = items
      .filter(i => i.value !== value)
      .map(i => {
    const chooseItem = (newValue: any) => {
      onChange(newValue);
      setCollapsed(!collapsed);
    }
    const handleOnItemClick = () => chooseItem(i.value);
    return <div onClick={handleOnItemClick}>{i.title}</div>
  });
  return (
      <div>
        <div onClick={handleOpenCloseSelectByClick}
             onKeyUp={handleOpenCloseSelectByEnterPress}
             className={styles.selected}
        >{selectedItemTitle?.title || 'none'}</div>
        {!collapsed && mappedItems}
      </div>
  )
}
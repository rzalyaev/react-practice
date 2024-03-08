import React, {useState, KeyboardEvent} from "react";
import styles from './Select.module.css';
import collapseArrow from '../_assets/icons8-collapse-arrow-15.png';
import expandArrow from '../_assets/icons8-expand-arrow-15.png';
import {ItemType} from "../Accordion/ControlledAccordion/ControlledAccordion";

type SelectPropsType = {
  value?: string
  onChange: (value: string) => void
  items: ItemType[]
}

export const Select = ({value, onChange, items}: SelectPropsType) => {
  const [collapsed, setCollapsed] = useState(true);
  const selectedItemTitle = items.find(item => item.value === value);
  const handleOpenCloseSelectByClick = () => setCollapsed(!collapsed);
  const handleOpenCloseSelectByEnterPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleOpenCloseSelectByClick();
    }
  }
  const mappedItems = items
      .filter((i, index) => value ? (i.value !== value) : (index !== 0))
      .map(i => {
    const chooseItem = (newValue: string) => {
      onChange(newValue);
      setCollapsed(!collapsed);
    }
    const handleOnItemClick = () => chooseItem(i.value);
    return <div onClick={handleOnItemClick} className={styles.itemToSelect}>{i.title}</div>
  });
  const selectedClassName: string = `${styles.selected} ${!collapsed && styles.expanded}`;
  return (
      <div className={styles.wrapper} tabIndex={1} onKeyUp={handleOpenCloseSelectByEnterPress}>
        <div onClick={handleOpenCloseSelectByClick} className={selectedClassName}>
          {selectedItemTitle?.title || items[0].title}
          {collapsed ? <img src={expandArrow} alt='expand arrow'/> : <img src={collapseArrow} alt="collapse arrow"/>}
        </div>
        {!collapsed && mappedItems}
      </div>
  )
}
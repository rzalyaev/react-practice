import React from "react";

export type ItemType = {
  title: string
  value: any
}

type ControlledAccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
  items: ItemType[]
  onClick: (value: any) => void
}

export const ControlledAccordion = ({titleValue, collapsed, onChange, items, onClick}: ControlledAccordionPropsType) => {
  return (
      <div>
        <ControlledAccordionTitle title={titleValue} onChange={onChange}/>
        {!collapsed && <ControlledAccordionBody items={items} onClick={onClick}/>}
      </div>
  )
}

type ControlledAccordionTitlePropsType = {
  title: string
  onChange: () => void
}

const ControlledAccordionTitle = ({title, onChange}: ControlledAccordionTitlePropsType) => {
  return (
      <h3 style={{cursor: 'pointer'}} onClick={(event) => onChange()}>{title}</h3>
  )
}

type ControlledAccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}

const ControlledAccordionBody = ({items, onClick}: ControlledAccordionBodyPropsType) => {
  const mappedItems = items.map((i, index) => <li onClick={() => onClick(i.value)} key={index}>{i.title}</li>);
  return (
      <ul>
        {mappedItems}
      </ul>
  )
}
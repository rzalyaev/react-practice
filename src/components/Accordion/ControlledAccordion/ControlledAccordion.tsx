import React from "react";

type ControlledAccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
}

export const ControlledAccordion = ({titleValue, collapsed, onChange}: ControlledAccordionPropsType) => {
  return (
      <div>
        <ControlledAccordionTitle title={titleValue} onChange={onChange}/>
        {!collapsed && <ControlledAccordionBody/>}
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

const ControlledAccordionBody = () => {
  return (
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
  )
}
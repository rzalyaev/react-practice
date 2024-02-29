import React from "react";

type ControlledAccordionPropsType = {
  titleValue: string
  collapsed: boolean
  changeCollapsedState: () => void
}

export const ControlledAccordion = ({titleValue, collapsed, changeCollapsedState}: ControlledAccordionPropsType) => {
  return (
      <div>
        <ControlledAccordionTitle title={titleValue} changeCollapsedState={changeCollapsedState}/>
        {!collapsed && <ControlledAccordionBody/>}
      </div>
  )
}

type ControlledAccordionTitlePropsType = {
  title: string
  changeCollapsedState: () => void
}

const ControlledAccordionTitle = ({title, changeCollapsedState}: ControlledAccordionTitlePropsType) => {
  return (
      <h3 style={{cursor: 'pointer'}} onClick={changeCollapsedState}>{title}</h3>
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
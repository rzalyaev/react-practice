import React from "react";

type ControlledAccordionPropsType = {
  titleValue: string
  collapsed: boolean
}

export const ControlledAccordion = (props: ControlledAccordionPropsType) => {
  console.log('ControlledAccordion is rendering');
  return (
      <div>
        <ControlledAccordionTitle title={props.titleValue}/>
        {!props.collapsed && <ControlledAccordionBody/>}
      </div>
  )
}

type ControlledAccordionTitlePropsType = {
  title: string
}

const ControlledAccordionTitle = (props: ControlledAccordionTitlePropsType) => {
  console.log('ControlledAccordionTitle is rendering');
  return (
      <h3>{props.title}</h3>
  )
}

const ControlledAccordionBody = () => {
  console.log('ControlledAccordionBody is rendering');
  return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
  )
}
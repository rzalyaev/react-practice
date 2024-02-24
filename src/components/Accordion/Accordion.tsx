import React from "react";

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
  console.log('Accordion is rendering');
  return (
      <div>
        <AccordionTitle title={props.titleValue}/>
        {props.collapsed ? <i>accordion is collapsed</i> : <AccordionBody/>}
      </div>
  )
}

type AccordionTitlePropsType = {
  title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  console.log('AccordionTitle is rendering');
  return (
      <h3>{props.title}</h3>
  )
}

const AccordionBody = () => {
  console.log('AccordionBody is rendering');
  return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
  )
}
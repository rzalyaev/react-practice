import React, {useReducer, useState} from "react";

type UncontrolledAccordionPropsType = {
  titleValue: string
}

type ActionType = {
  type: string
}

const reducer = (state: boolean, action: ActionType) => {
  switch (action.type) {
    case 'TOGGLE-COLLAPSED':
      return !state;
    default:
      throw new Error('Unknown action type');
  }
}

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
  console.log('UncontrolledControlledAccordion is rendering');

  // const [collapsed, setCollapsed] = useState(false);
  const [collapsed, dispatch] = useReducer(reducer, false);
  const changeCollapsedState = () => dispatch({type: 'TOGGLE-COLLAPSED'});
  return (
      <div>
        <UncontrolledAccordionTitle title={props.titleValue} changeCollapsedState={changeCollapsedState}/>
        {!collapsed && <UncontrolledAccordionBody collapsed={collapsed}/>}
      </div>
  )
}

// Title ---------------------------------------------------------------------------------------------------------------
type UncontrolledAccordionTitlePropsType = {
  title: string
  changeCollapsedState: () => void
}

const UncontrolledAccordionTitle = ({title, changeCollapsedState}: UncontrolledAccordionTitlePropsType) => {
  console.log('UncontrolledAccordionTitle is rendering');
  return (
      <h3 style={{cursor: 'pointer'}} onClick={changeCollapsedState}>{title}</h3>
  )
}


// Body ----------------------------------------------------------------------------------------------------------------
type UncontrolledAccordionBodyPropsType = {
  collapsed: boolean
}

const UncontrolledAccordionBody = ({collapsed}: UncontrolledAccordionBodyPropsType) => {
  console.log('UncontrolledAccordionBody is rendering');
  if (collapsed) {
    return <></>;
  }
  return (
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
  )
}
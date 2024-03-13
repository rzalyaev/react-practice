import React, {useReducer} from "react";
import {uncontrolledAccordionReducer, StateType, TOGGLE_COLLAPSED} from "./UncontrolledAccordionReducer";

type UncontrolledAccordionPropsType = {
  titleValue: string
}

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
  const initialState: StateType = {collapsed: false};
  const [state, dispatch] =
      useReducer(uncontrolledAccordionReducer, initialState);
  const changeCollapsedState = () => dispatch({type: TOGGLE_COLLAPSED});
  return (
      <div>
        <UncontrolledAccordionTitle title={props.titleValue} changeCollapsedState={changeCollapsedState}/>
        {!state.collapsed && <UncontrolledAccordionBody collapsed={state.collapsed}/>}
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
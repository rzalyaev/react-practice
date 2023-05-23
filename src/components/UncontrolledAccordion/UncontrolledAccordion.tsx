import React, {useReducer} from "react";
import {UncontrolledAccordionTitle} from "./UncontrolledAccordionTitle/UncontrolledAccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody/UncontrolledAccordionBody";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type PropsType = {
    title: string
}

const UncontrolledAccordionComponent = (props: PropsType) => {
    // const [collapsed, setCollapsed] = useState(false);
    const [state, dispatch] = useReducer(reducer, {collapsed: false});

    const setCollapsedHandler = () => dispatch({type: TOGGLE_COLLAPSED});

    return (
        <div>
            <UncontrolledAccordionTitle title={props.title}
                                        collapsed={state.collapsed}
                                        setCollapsed={setCollapsedHandler}/>
            {!state.collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}

export const UncontrolledAccordion = React.memo(UncontrolledAccordionComponent);
import React from "react";

const UncontrolledAccordionBodyComponent = () => {
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export const UncontrolledAccordionBody = React.memo(UncontrolledAccordionBodyComponent);
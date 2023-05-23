import React, {FC} from "react";
import {ItemType} from "../Accordion";

type AccordionBodyPropsType = {
    items: ItemType[],
    onClick: (value: any) => void,
}

const AccordionBodyComponent: FC<AccordionBodyPropsType> = ({items, onClick}) => {
    return (
        <ul>
            {items.map((item, index) => <li key={index} onClick={() => onClick(item.value)}>{item.title}</li>)}
        </ul>
    )
}

export const AccordionBody = React.memo(AccordionBodyComponent);
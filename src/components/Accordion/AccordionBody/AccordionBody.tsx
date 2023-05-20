import React, {FC} from "react";
import {ItemType} from "../Accordion";

type AccordionBodyPropsType = {
    items: ItemType[],
    onClick: (value: any) => void,
}

export const AccordionBody: FC<AccordionBodyPropsType> = ({items, onClick}) => {
    return (
        <ul>
            {items.map((item, index) => <li key={index} onClick={() => onClick(item.value)}>{item.title}</li>)}
        </ul>
    )
}
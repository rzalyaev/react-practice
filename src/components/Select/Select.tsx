import React, {FC, useState} from "react";

export type ItemType = {
    title: string,
    value: any,
}

type PropsType = {
    value: any,
    onChange: (value: any) => void,
    items: ItemType[]
}

export const Select: FC<PropsType> = ({value, onChange, items}) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const handleOnClick = () => setCollapsed(!collapsed);
    const filteredItem = items.find(item => item.value === value);

    return(
        <div>
            <div onClick={handleOnClick}>{filteredItem?.title}</div>
            {!collapsed && items.map(item => <div>{item.title}</div>)}
        </div>
    )
}
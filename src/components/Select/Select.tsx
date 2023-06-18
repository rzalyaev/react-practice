import React, {FC, useState, KeyboardEvent} from "react";
import styles from './Select.module.css';

export type ItemType = {
    countryId?: number,
    title: string,
    value: any,
    population?: number
}

type PropsType = {
    value?: any,
    onChange: (value: any) => void,
    items: ItemType[]
}

const SelectComponent: FC<PropsType> = ({value, onChange, items}) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const [hoveredElemValue, setHoveredElemValue] = useState(value || items[0].value);
    const collapseSelect = () => setCollapsed(!collapsed);
    const selectedItem = items.find(item => item.value === value);
    const hoveredItem = items.find(item => item.value === hoveredElemValue);

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].value === hoveredElemValue) {
                if (e.key === 'ArrowUp') {
                    if (items[i - 1]) {
                        onChange(items[i - 1].value || items[i].value);
                        setHoveredElemValue(items[i - 1].value || items[i].value);
                        break;
                    } else break;
                }
                if (e.key === 'ArrowDown') {
                    if (items[i + 1]) {
                        onChange(items[i + 1].value || items[i].value);
                        setHoveredElemValue(items[i + 1].value || items[i].value);
                        break;
                    } else break;
                }
            }
        }
        if (e.key === 'Escape' || e.key === 'Enter') collapseSelect();
    }

    return(
        <div className={styles.container}>
            <div className={styles.select}
                 onKeyDown={onKeyDown}
                 onClick={collapseSelect}
                 tabIndex={0}
            >
                {selectedItem?.title || items[0].title}
            </div>
            <div className={styles.optionsContainer}>
                {!collapsed && items.map((item, index) => {
                        const chooseOption = () => {
                            onChange(item.value);
                            setCollapsed(true);
                        }

                        const hoverOption = () => setHoveredElemValue(item.value);

                        const optionClassName = `${styles.option} ${item === hoveredItem ? styles.selected : ''}`

                        return (
                            <div key={index}
                                 className={optionClassName}
                                 onMouseEnter={hoverOption}
                                 onClick={chooseOption}>{item.title}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export const Select = React.memo(SelectComponent);
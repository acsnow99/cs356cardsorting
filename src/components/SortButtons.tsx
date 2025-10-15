import React from "react";
import type { CardDataObject } from "../types";

export function SortButtons({data, setData}: {data: CardDataObject[], setData: (data: CardDataObject[]) => void}) {
    const handleClick = (type: string) => {
        const result: CardDataObject[] = [];
        switch(type) {
            case 'all':
                data.forEach((item) => {
                    result.push(item);
                })
                break;
            case 'ugly':
                data.forEach((item) => {
                    if (item.ugly) {
                        result.push(item);
                    }
                })
                break;
            case 'cute':
                data.forEach((item) => {
                    if (item.ugly !== undefined && !item.ugly) {
                        result.push(item);
                    }
                })
                break;
            default:
                data.forEach((item) => {
                    if (item.ugly === undefined) {
                        result.push(item);
                    }
                })
                break;
        }
        setData(result);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row', gap: '1rem', marginBottom: '0.5rem'}}>
            <button onClick={() => handleClick('all')}>All Available Animals</button>
            <button onClick={() => handleClick('ugly')}>Objectively Ugly Animals</button>
            <button onClick={() => handleClick('cute')}>Cute Animals</button>
            <button onClick={() => handleClick('none')}>Animals that are hard to place</button>
        </div>
    )
}

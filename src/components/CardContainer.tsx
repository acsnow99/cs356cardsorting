import type { CardDataObject } from "../types";
import React from "react";
import { Card } from "./Card";

export function CardContainer({data}: {data: CardDataObject[]}) {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', height: '30rem', width: '100%', border: '0.1rem solid', }}>
            {data.map((item) => {
                return <Card data={item} />;
            })}
        </div>
    )
}

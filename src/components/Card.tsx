import React from "react";
import type { CardDataObject } from "../types";

export function Card({data}: {data: CardDataObject}) {
    return (
        <div style={{height: '10rem', margin: '1rem', width: '14rem', border: '0.1rem solid', }}>
            <div style={{margin: '0.5rem'}}>
                <p style={{fontSize: '22'}}>{data.name}</p>
                <p>{data.species}</p>
                <p>Loves {data.activity}</p>
                {data.ugliness > 0 ? <p>Ugly level: {data.ugliness}</p> : <p>Ugly level: idk</p>}
            </div>
        </div>
    )
}
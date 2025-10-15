import React from "react";

export const SortDropdown = ({sortby, setSortby}: {sortby: string, setSortby: (sortby: string) => void}) => {
    return (
        <div style={{marginBottom: '0.5rem'}}>
            <select onChange={(event) => setSortby(event.target.value)} value={sortby}>
                <option key="name" value="name">Name</option>
                <option key="hobby" value="hobby">Hobby</option>
                <option key="ugly" value="ugliness">Ugliness</option>
            </select>
        </div>
    )
}
import React, { useMemo, useState } from 'react';
import { CardContainer } from './components/CardContainer';
import { data } from './data';
import { SortButtons } from './components/SortButtons';
import { SortDropdown } from './components/SortDropdown';

export function App() {
    const [sortedData, setSortedData] = useState(data.sort((a, b) => a.name.localeCompare(b.name)));
    const [sortby, setSortby] = useState('name');

    const sortedDataSortby = useMemo(() => {
        let sorted = [...sortedData];
        switch (sortby) {
            case 'name':
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'hobby':
                sorted.sort((a, b) => a.activity.localeCompare(b.activity));
                break;
            case 'ugliness':
                sorted.sort((a, b) => a.ugliness - b.ugliness);
                break;
            default:
                break;
        }
        return sorted;
    }, [sortedData, sortby])

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
            <SortButtons data={data} setData={setSortedData} />
            <SortDropdown sortby={sortby} setSortby={setSortby} />
            <CardContainer data={sortedDataSortby}/>
        </div>
    );
}

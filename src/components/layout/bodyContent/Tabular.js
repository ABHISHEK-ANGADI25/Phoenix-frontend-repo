import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Tabular() {
    const [value, setValue] = React.useState('home');
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div classname="tabular">
            <Tabs value={value} onChange={handleChange} centered textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example" >
                <Tab value="package" label="Packages" variant="filled" sx={{bgcolor: '#CEDDE7'}}/>
                <Tab value="hotels" label="Hotels" variant="filled" sx={{bgcolor: '#CEDDE7'}}/>
                <Tab value="cabs" label="Cabs" sx={{bgcolor: '#CEDDE7'}} />
                <Tab value="activities" label="Activities" sx={{bgcolor: '#CEDDE7'}} />
                <Tab value="trains" label="Trains" sx={{bgcolor: '#CEDDE7'}}/>
                <Tab value="buses" label="Buses" sx={{bgcolor: '#CEDDE7'}}/>
                <Tab value="flights" label="Flights" sx={{bgcolor: '#CEDDE7'}}/>
            </Tabs>
        </div>
    );
}

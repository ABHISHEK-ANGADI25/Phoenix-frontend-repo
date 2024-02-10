import React, { useState } from 'react';
import { InputLabel, MenuItem, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function PackageDropDown() {
    const [starting, setStarting] = React.useState('');
    const [destinations, setDestinations] = React.useState('');
    const [theme, setTheme] = React.useState('');

    const handleChange = (event) => {
        setStarting(event.target.value);
        setDestinations(event.target.value);
        setTheme(event.target.value);
    };

    return (
        <div>
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Starting from</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={starting}
                    onChange={handleChange}
                    label="Starting from"
                >
                    <MenuItem value="">
                        <em>Select starting location</em>
                    </MenuItem>
                    <MenuItem value={10}>Bengaluru</MenuItem>
                    <MenuItem value={20}>Vijayapur</MenuItem>
                    <MenuItem value={30}>Bagalkot</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Destination location</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={destinations}
                    onChange={handleChange}
                    label="Destination location"
                >
                    <MenuItem value="">
                        <em>Select Destination location</em>
                    </MenuItem>
                    <MenuItem value={10}>Bengaluru</MenuItem>
                    <MenuItem value={20}>Vijayapur</MenuItem>
                    <MenuItem value={30}>Bagalkot</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Theme</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={theme}
                    onChange={handleChange}
                    label="Select Theme"
                >
                    <MenuItem value="">
                        <em>Select Theme</em>
                    </MenuItem>
                    <MenuItem value={10}>Solo</MenuItem>
                    <MenuItem value={20}>Couple</MenuItem>
                    <MenuItem value={30}>Family</MenuItem>
                    <MenuItem value={40}>Friends</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="From" />
                    </DemoContainer>
                </LocalizationProvider>
            </FormControl>
            <FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="To" />
                    </DemoContainer>
                </LocalizationProvider>
            </FormControl>
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                <TextField id="filled-basic" label="Travelers" variant="outlined" />
            </FormControl>
        </div>
    );
}
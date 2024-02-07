import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header() {
    const [value, setValue] = React.useState('home');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example">
                <Tab value="home" label="Home" />
                <Tab value="destinations" label="Destinations" onClick={handleClick} />
                <Tab value="packages" label="Packages" />
                <Tab value="about" label="About Us" />
                <Tab value="support" label="Support" />
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Singapore</MenuItem>
                    <MenuItem onClick={handleClose}>Dubai</MenuItem>
                    <MenuItem onClick={handleClose}>Paris</MenuItem>
                </Menu>
            </Tabs>
        </Box>
    );
}

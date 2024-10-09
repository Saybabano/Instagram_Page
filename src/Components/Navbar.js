import React, { useState } from 'react';
import { AppBar, Box, InputBase, Toolbar, Typography, styled, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

const StyleToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar position="sticky">
        <StyleToolbar>
          <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' },fontWeight:'800' }}>
            Aisha Khan
          </Typography>
          <SpaIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
          <Search sx={{display:'flex',gap:'3px'}}>
            <SearchIcon  sx={{color:'gray'}}/>
            <InputBase placeholder="Search...." />
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://img.freepik.com/premium-photo/professional-woman-posed-black-suit-great-business-formal-events_1254878-27251.jpg"
              onClick={handleClick}
              aria-controls="user-menu"
              aria-haspopup="true"
            />
          </Icons>
          <UserBox onClick={handleClick}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://img.freepik.com/premium-photo/professional-woman-posed-black-suit-great-business-formal-events_1254878-27251.jpg"
            />
            <Typography variant="span">sayba</Typography>
          </UserBox>
        </StyleToolbar>
        <Menu
          id="user-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </AppBar>
    </Box>
  );
}

export default Navbar;

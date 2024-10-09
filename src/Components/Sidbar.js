import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ArticleIcon from '@mui/icons-material/Article';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import Brightness2Icon from '@mui/icons-material/Brightness2';

import React from 'react';

function Sidbar({setMode,mode}) {
  return (
    <Box flex={1} p={1} sx={{display:{xs:'none',sm:'block'}}}>
        <Box position={'fixed'}>
        <List>
          <ListItem disablePadding>
            <ListItemButton Component='a' href='#Home'>
              <ListItemIcon>
              <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton Component='a' href='#page'>
              <ListItemIcon>
              <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton Component='a' href='#Marketplace'>
              <ListItemIcon>
              <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton Component='a' href='#Groups'>
              <ListItemIcon>
              <PeopleAltIcon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton Component='a' href='#Friend'>
              <ListItemIcon>
              <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="Friend" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton Component='a' href='#Threads'>
              <ListItemIcon>
              <AlternateEmailIcon/>
              </ListItemIcon>
              <ListItemText primary="Threads" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton Component='a' href='#Settings'>
              <ListItemIcon>
              <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton Component='a' href='#Profile'>
              <ListItemIcon>
              <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton Component='a' href='#Profile'>
              <ListItemIcon>
              <Brightness2Icon/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode==="light" ? "dark" :"light")}/>
            </ListItemButton>
          </ListItem>
        </List>  
        </Box>
       
    </Box>
  )
}

export default Sidbar

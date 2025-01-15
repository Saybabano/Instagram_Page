import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
        <Box 
            flex={2}
            p={2}
            sx={{display:{xs:'none',sm:'block'}}}
        >
          <Box position={'fixed'}>
            <Typography variant='h6' fontWeight={'100'}>Online Frients</Typography>
            <AvatarGroup max={6} sx={{marginRight:'20rem'}}>
              <Avatar alt="Remy Sharp" src="https://rukminim2.flixcart.com/image/750/900/l432ikw0/poster/8/g/j/medium-bts-south-korean-boy-band-hd-matte-finish-poster-original-imagf23fa3ttybna.jpeg?q=20&crop=false"/>
              <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-IhwrWyUahrwUKGohp1xpNbcTp5QFf8VK_jIuoRAa71CVOt_w5PRMhIUGCLqXbUm3TY&usqp=CAU"/>
              <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjHX2bx_RCInQIuZBhaq9uHjy0IR1EQMsPferOaylqrA1DkLG6kzYQe9W1yiW-GI_o38&usqp=CAU"/>
              <Avatar alt="Agnes Walker" src="https://pbs.twimg.com/media/DwAdCgAV4AAcXvi.jpg"/>
              <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0SG6XkJuNPT6IsigjEKYme8vt9DpKt5W0VQj1Wzwg3OsVHgQRvdsaJVAFI1ZIvMNoV4&usqp=CAU"/>
              <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0SG6XkJuNPT6IsigjEKYme8vt9DpKt5W0VQj1Wzwg3OsVHgQRvdsaJVAFI1ZIvMNoV4&usqp=CAU"/>
              <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0SG6XkJuNPT6IsigjEKYme8vt9DpKt5W0VQj1Wzwg3OsVHgQRvdsaJVAFI1ZIvMNoV4&usqp=CAU"/>
            </AvatarGroup>
            <Typography variant='h6' fontWeight={'100'}>Latest Photos</Typography>
            <ImageList 
              cols={3} 
              rowHeight={150} 
              gap={5} 
              sx={{ maxHeight: 200, width: '100%' }}
            >
              <ImageListItem>
                <img 
                  src="https://i.pinimg.com/236x/7c/7f/cb/7c7fcb47e65fec252042d36326030554.jpg" 
                  alt="Stylish girl photo 1"
                />
              </ImageListItem>
              <ImageListItem>
                <img 
                  src="https://preview.redd.it/newbie-hijabi-guidance-v0-f3i38b9tkehd1.jpg?width=930&format=pjpg&auto=webp&s=ead1e8bc4fc29db1d402a9093f944437d9d0f1f3" 
                  alt="Stylish girl photo 2"
                />
              </ImageListItem>
            </ImageList>

            <Typography variant='h6' fontWeight={'100'}>Latest Conversation</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',marginBottom:5 }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2218343/pexels-photo-2218343.jpeg?cs=srgb&dl=pexels-emris-2218343.jpg&fm=jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: 'text.primary', display: 'inline' }}
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="https://s3.envato.com/files/349622578/Arabian%20woman%20(3).jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Summer BBQ"
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: 'text.primary', display: 'inline' }}
                        >
                          to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpETr5fbTA_HECLuOEEDrt6a5_-IT8xBUnQ&s" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Oui Oui"
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: 'text.primary', display: 'inline' }}
                        >
                          Sandra Adams
                        </Typography>
                        {' — Do you have Paris recommendations? Have you ever…'}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
          </Box>
        </Box>
  )
}

export default Rightbar

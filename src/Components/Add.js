import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import { grey} from '@mui/material/colors';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import DateRange from '@mui/icons-material/DateRange';


const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px', // Space between avatar and other elements
  marginTop: '10px',
});

function Add() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip 
        onClick={() => setOpen(true)} 
        title="Add" 
        sx={{
          position: 'fixed',
          bottom: '20px',
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box 
          width={400} 
          height={300} 
          bgcolor={"background.default"} 
          color={"text.primary"}
          p={2} 
          borderRadius={5}
        >
          <Typography variant='h6' color={grey[700]} textAlign='center'>Create Post</Typography>
          <UserBox>
            <Avatar 
              sx={{ width: 30, height: 30 }}
              src="https://img.freepik.com/premium-photo/professional-woman-posed-black-suit-great-business-formal-events_1254878-27251.jpg"
            />
            <Typography variant="span" fontWeight={500}>Aisha Khan</Typography>
          </UserBox>
          <TextField
              sx={{width:'100%',marginTop:'1rem'}}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's on your mind?"
              variant="standard"
            />
            <Stack direction="row" gap={1} mt={1} mb={3}>
              <EmojiEmotionsIcon/>
              <PersonAddIcon/>
              <PhotoLibraryIcon/>
              <VideoCameraBackIcon/>

            </Stack>
            <ButtonGroup 
              fullWidth
              variant="contained" 
              aria-label="Basic button group">
              <Button>Post</Button>
              <Button sx={{width:'100px'}}><DateRange/></Button>
            </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;

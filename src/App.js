import { useState } from "react"
import Feed from "./Components/Feed"
import Navbar from "./Components/Navbar"
import Rightbar from "./Components/Rightbar"
import Sidbar from "./Components/Sidbar"
import {Box,Stack, createTheme} from '@mui/material'
import { ThemeProvider } from "@emotion/react"
import Add from "./Components/Add"



function App() {
  const [mode,setMode]=useState("light")
  const darkThem=createTheme({
    palette:{
      mode:mode,
    }
  })
  return (
    <ThemeProvider theme={darkThem }>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent='space-between' marginTop={8}>
          <Sidbar setMode={setMode} mode={mode}/>
          <Feed/>
          <Rightbar/>
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
  )
}

export default App


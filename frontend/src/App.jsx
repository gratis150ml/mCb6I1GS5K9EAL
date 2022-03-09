import { useState, useEffect} from 'react'
import './App.css'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Home';
import Show from './components/Show';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#bc0927',
      },
      secondary: {
        main: '#3f51b5',
      },
    },
  });
  const [jsond, setJson] = useState([])
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/rooms/').then((resp)=>resp.json()).then((data)=>setJson(data)).catch((err)=>console.log(err))
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <Home />
    </ThemeProvider>
  )
}

export default App

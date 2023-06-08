import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



import { Home } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer/>
      <Home/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;

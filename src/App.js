import './App.css';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import Header from './layout/Header';
import Home from './layout/Home';
import Skills from './layout/Skills';
import Projects from './layout/Projects';
import Services from './layout/Services';
import About from './layout/About';
import theme from './theme';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />  
          <header className="App-header">
            <Home />
          </header>
          <About />
          <Skills />
          <Projects />
          <Services />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

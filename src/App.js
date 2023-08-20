import './App.css';
import Container from '@mui/material/Container';
import AppCarousel from './components/carousel';
import AboutApp from './components/about.tsx';
import HeaderResponsive from './components/header.tsx';


function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <HeaderResponsive></HeaderResponsive>
        <AppCarousel></AppCarousel>
        <AboutApp></AboutApp>
      </Container>
    </div>
 );
}

export default App;

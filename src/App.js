import './App.css';
import Container from '@mui/material/Container';
import ResponsiveAppBar from './components/header.tsx';
import AppCarousel from './components/carousel';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AboutApp from './components/about.tsx';


function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <ResponsiveAppBar></ResponsiveAppBar>
          <Router>
            <Routes>
              <Route exact path="/" element={<AppCarousel />}>
              </Route>
              <Route exact path="about" element={ <AboutApp />}>
              </Route>
            </Routes>
          </Router>
      </Container>
    </div>
 );
}

export default App;

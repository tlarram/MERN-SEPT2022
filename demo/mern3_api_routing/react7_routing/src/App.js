import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate, Link } from "react-router-dom"
import ErrorPage from './views/ErrorPage';
import Location from './views/Location';
import Keyword from './views/Keyword';
import SearchForm from './views/SearchForm';
import DisplayOnLoad from './views/DisplayOnLoad';

const Home = () => {
  return (
    <fieldset>
      <legend> Home.jsx</legend>
    </fieldset>
  )
}

const About = () => {
  return (
    <fieldset>
      <legend> About.jsx</legend>
    </fieldset>
  )
}

const Footer = () => {
  return (
    <fieldset>
      <legend> Footer.jsx</legend>
    </fieldset>
  )
}


function App() {
  return (
    <div className="App">
      <h1> Routing Demo</h1>
      <p> 
        <Link to="/"> Home </Link>|
        <Link to="/about"> About </Link>|
        <Link to="/location/tokyo"> Tokyo </Link>|
        <Link to="/location/paris"> Paris </Link>|
        <Link to="/search/whatever/teal"> Whatever in teal </Link>|
        <Link to="/randomerror"> ErrorPage </Link>|
        <Link to="/searchForm"> SearchForm </Link>

      </p>

      <p>
      <Link to="/pokemon/pikachu"> Pikachu</Link>|
      <Link to="/pokemon/snorlax"> Snorlax</Link>|
      </p>

      <p>
      <a href="/"> a-tag home</a>|
      <a href="/about"> a-tag about</a>
      <a href="http://www.google.com"> a-tag Google</a>
      </p>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/location/:city" element={<Location />} />
          <Route path="/search/:keyword/:color" element={<Keyword />} />
          <Route path="/searchForm" element={<SearchForm />} />
          <Route path="/pokemon/:pokemonNameFromParams" element={<DisplayOnLoad />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

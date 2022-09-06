import logo from './logo.svg';
import './App.css';
import FetchDemo from './views/FetchDemo';
import DisplayOnLoad from './components/DisplayOnLoad';
import PokemonChallengeView from './components/pokemonChallenge/PokemonChallengeView';



function App() {

  return (
    <div className="App">
    {/* <FetchDemo /> */}
    {/* <DisplayOnLoad /> */}
    <PokemonChallengeView />

    </div>
  );
}

export default App;

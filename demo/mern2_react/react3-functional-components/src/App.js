import logo from './logo.svg';
import './App.css';
import VideoDetails from './components/VideoDetails';

function App() {
  return (
    <div className="App">
      <h1> Video List</h1>
      <VideoDetails 
          title="Thursday Frog" 
          description="It's Thursday, my dude" 
          rating={10}  
          hashtags = {["Very loud", "Thursday", "cute frog"]}
          />
    </div>
  );
}

export default App;

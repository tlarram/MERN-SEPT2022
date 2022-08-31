import logo from './logo.svg';
import './App.css';
import VideoDetails from './components/VideoDetails';
import CounterComponent from './components/CounterComponent';

function App() {
  return (
    <div>
      <h1> Counter Test (State)</h1>
      <CounterComponent /> 
      <CounterComponent /> 



      <h1> Video List</h1>
      <VideoDetails 
          title="Wednesday Frog" 
          description="It's Wednesday, my dude" 
          rating={10}  
          hashtags = {["Very loud", "Wednesday", "cute frog"]}
          />
      <VideoDetails 
        title="Justin Bieber Christmas MV" 
        description="It's a funny MV"
        rating={15}  
        hashtags = {["some hate it", "Christmas"]}
        />
      <VideoDetails 
        title="MERN belt review" 
        description="It's super helpful"
        rating={100}  
        hashtags = {["exam", "React", "JS"]}
        />
    </div>
  );
}

export default App;

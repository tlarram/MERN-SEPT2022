import logo from './logo.svg';
import './App.css';
import VideoDetails from './components/VideoDetails';
import CounterComponent from './components/CounterComponent';
import VideoDetailsWithLikes from './components/VideoDetailsWithLikes';
import StylingComponent from './components/StylingComponent';

function App() {

  return (
    <div className='container mt-5'>
      <StylingComponent newBackgroundColor = "black"/>



      {/* 
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
        /> */}

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import TestPage from './views/TestPage';
import DashboardPage from './views/DashboardPage';
import DetailsPage from './views/DetailsPage';
import UpdatePage from './views/UpdatePage';
import CreatePage from './views/CreatePage';
import ErrorPage from './views/ErrorPage';


function App() {
  return (
    <div>
      <h1> Destination Board</h1>
      <p>
        <Link to="/test"> Test</Link>|
        <Link to="/destinations"> Dashboard page</Link>|
        <Link to="/destinations/add"> Create a destination</Link>|
      </p>

      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="/destinations" element={<DashboardPage />} />
        <Route path="/destinations/add" element={<CreatePage />} />
        <Route path="/destinations/:id" element={<DetailsPage />} />
        <Route path="/destinations/edit/:id" element={<UpdatePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </div>
  );
}

export default App;

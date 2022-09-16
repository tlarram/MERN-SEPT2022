import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import DashboardPage from "./views/DashboardPage"
import CreateJob from "./views/CreateJob"
import UpdateJob from "./views/UpdateJob"
import JobDetails from "./views/JobDetails"

function App() {
  return (
    <div className="container mt-5">
      <h1> Jobs Board</h1>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/jobs/new" element={<CreateJob />} />
        <Route path="/jobs/edit/:id" element={<UpdateJob />} />
        <Route path="/jobs/:id" element={<JobDetails />} />


      </Routes>
    </div>
  );
}

export default App;

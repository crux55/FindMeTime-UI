import '../App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateGoalForm from './goals/CreateGoalForm';
import CreateTaskForm from './tasks/CreateTaskForm'
import GetTasks from './tasks/TaskCards';
import Navbar from '../navbar';
import Day from '../components/findTime/day'
import CreateGcalEventsPage from '../assemblers/calendar/CreateGcalEvents'

function NavbarView() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<GetTasks/>} />
        <Route path='/create_task' element={<CreateTaskForm/>} />
        <Route path='/create_goal' element={<CreateGoalForm/>} />
        <Route path='/find_time' element={<Day/>} />
        <Route path='/create_gcal_events' element={<CreateGcalEventsPage/>} />
      </Routes>
    </Router>
  );
}
  
export default NavbarView;
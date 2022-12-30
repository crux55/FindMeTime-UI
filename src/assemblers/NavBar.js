import '../App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateTaskForm from './tasks/CreateTaskForm'
import GetTasks from './tasks/TaskCards';
import Navbar from '../navbar';
import Day from '../components/findTime/day'

function NavbarView() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<GetTasks/>} />
        <Route path='/create_task' element={<CreateTaskForm/>} />
        <Route path='/find_time' element={<Day/>} />
      </Routes>
    </Router>
  );
}
  
export default NavbarView;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import CreateTaskForm from './components/tasks/CreateTaskForm'
// import reportWebVitals from './reportWebVitals';
import GetTasks from './assemblers/tasks/TaskCards';
// import ListEventCards from './components/calendar/GcalEventCards';
// import GCalAddEvent from './hooks/GcalCreateEvent';
import NavbarView from './assemblers/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarView />
    {/* <CreateTaskForm /> */}
    {/* <GCalAddEvent /> */}
    {/* <GetTasks /> */}
    {/* <ListEventCards /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

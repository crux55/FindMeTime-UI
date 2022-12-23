import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CreateTaskForm from './newTaskForm'
import reportWebVitals from './reportWebVitals';
import GetTasks from './getTasks';
import ListEventCards from './gcalApp';
import AddEvent from './gcalCreateEvent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreateTaskForm />
    {/* <AddEvent /> */}
    <GetTasks />
    <ListEventCards />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

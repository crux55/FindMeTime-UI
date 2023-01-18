import * as DayConstants from '../../constants/planner'
import { useLocation } from "react-router-dom";
import * as Constants from "../../constants/url"
import React,{useState,useEffect} from 'react';
import { Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import './FindTimeView.css'


 //https://codepen.io/ruphaa/pen/Kborrj
function Day() {
  const navigate = useNavigate();
  const location = useLocation();

  const [findTimeResponse, setFindTimeResponse] = useState();

  useEffect(() => {
    fetch(Constants.FIND_TIME_ENDPOINT, {
      method: 'POST',
      mode: 'cors',
      body: location.state.id,
      headers: {
          'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setFindTimeResponse(data));
  }, []);



    
    // findTimeResponse = {startDate: "1/1/2023", endDate:"7/1/2023",
    // goals: [{text: "this is a goal"}],
    // tasks: [{text: "this is a task"}],
    // week: [{date: "1/1/2023", day:"Monday", sortedItems: [{startTime:"8am", endTime:"9am", title:"walk"}]}]
    // }
  // findTimeResponse = location.state

  return findTimeResponse && (
    <>
    
<div class="paper">
  <div class="lines">
    <div class="text" contenteditable spellcheck="false">
        <div className="date">
            <h2>This week</h2>
            <p>{findTimeResponse.StartDate} - {findTimeResponse.EndDate}</p>
        </div>

        <div className="Goals">
            <h2>Top {DayConstants.goalsToDisplay} Goals</h2>
            {findTimeResponse.ProposedGoals && findTimeResponse.ProposedGoals.slice(0, DayConstants.goalsToDisplay).map((goal) => <p>{goal.Title}</p>)}
        </div>

        <div className="date">
            <h2>Top {DayConstants.tasksToDisplay} tasks</h2>
            {findTimeResponse.ProposedTasks && findTimeResponse.ProposedTasks.slice(0, DayConstants.tasksToDisplay).map((task) => <p>{task.Title}</p>)}
        </div>
        <div className="Week"><h2>Proposed tasks for the week</h2>
            {Object.entries(findTimeResponse.Week.Days).map(([date, day]) => {
                return(<div class="dayView" key={date}>
                        <div class="date"><h3>{date} </h3> </div>
			          {day['SortedItems'] && day['SortedItems'].map((item) => {
                    return(
                      <>
                        <div className="taskTime"><h4>{item.StartTime} - {item.EndTime} {item.Title} </h4></div>
                      </>)
			          })}
        </div>)
            })}
      <Button
        onClick={() => { navigate("/create_gcal_events", {state: findTimeResponse})} }
        >
        Click me
      </Button>
    </div>
  </div>
</div>
  <div class="holes hole-top"></div>
  <div class="holes hole-middle"></div>
  <div class="holes hole-bottom"></div>
</div>
    </>
  );
}

export default Day;

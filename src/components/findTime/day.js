import * as DayConstants from '../../constants/planner'
import { useLocation } from "react-router-dom";
import * as Constants from "../../constants/url"
import React,{useState,useEffect} from 'react';
import { Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import './FindTimeView.css'
import { v4 as uuid } from 'uuid';

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
  return findTimeResponse && ( 
    <div className="paper">
      <div className="lines">
        <div className="text" spellCheck="false">
            <div className="date">
                <h2>This week</h2>
                <p>{findTimeResponse.StartDate} - {findTimeResponse.EndDate}</p>
            </div>

            <div className="Goals">
                <h2>Top {DayConstants.goalsToDisplay} Goals</h2>
                {findTimeResponse.ProposedGoals && findTimeResponse.ProposedGoals.slice(0, DayConstants.goalsToDisplay).map((goal) => <p key={uuid()}>{goal.Title}</p>)}
            </div>

            <div className="date">
                <h2>Top {DayConstants.tasksToDisplay} tasks</h2>
                {findTimeResponse.ProposedTasks && findTimeResponse.ProposedTasks.slice(0, DayConstants.tasksToDisplay).map((task) => <p key={uuid()}>{task.Title}</p>)}
            </div>
            <div className="Week"><h2>Proposed tasks for the week</h2>
                {Object.entries(findTimeResponse.Week.Days).map(([date, day]) => {
                    return(<div className="dayView" key={date}>
                            <div className="date"><h3>{date} </h3> </div>
                            {day['SortedItems'] && day['SortedItems'].map((item) => {
                              return(
                              <div className="taskTime" key={uuid()}><h4>{item.StartTime} - {item.EndTime} {item.Title} </h4></div>
                            )
                            })}
                          </div>)
                  })}
              <Button onClick={() => { navigate("/create_gcal_events", {state: findTimeResponse})} }> Confirm </Button>
            </div>
        </div>
      </div>
      <div className="holes hole-top"></div>
      <div className="holes hole-middle"></div>
      <div className="holes hole-bottom"></div>
    </div>
  );
}

export default Day;

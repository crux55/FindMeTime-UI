import * as DayConstants from '../../constants/planner'
import * as Constants from "../../constants/url"
import React,{useState,useEffect} from 'react';

 //https://codepen.io/ruphaa/pen/Kborrj
function Day({ findTimeResponse }) {

    findTimeResponse = {startDate: "1/1/2023", endDate:"7/1/2023",
    goals: [{text: "this is a goal"}],
    tasks: [{text: "this is a task"}],
    week: [{date: "1/1/2023", day:"Monday", sortedItems: [{startTime:"8am", endTime:"9am", title:"walk"}]}]
    }

  return (
    <>
        <div className="date">
            <h2>This week</h2>
            <p>{findTimeResponse.startDate} - {findTimeResponse.endDate}</p>
        </div>

        <div className="Goals">
            <h2>Top {DayConstants.goalsToDisplay} Goals</h2>
            {findTimeResponse.goals.slice(0, DayConstants.goalsToDisplay).map((goal) => goal.text)}
        </div>

        <div className="date">
            <h2>Top {DayConstants.tasksToDisplay} tasks</h2>
            {findTimeResponse.tasks.slice(0, DayConstants.tasksToDisplay).map((task) => task.text)}
        </div>

        <div className="Week">Proposed tasks for the week
            {findTimeResponse.week.map((d) => {
                return(<div class="dayView" key={d.date}>
                    <div class="day"> {d.day} </div>
                    <div class="date"> {d.date} </div>
			{d.sortedItems.map((item) => {
				return(
					<>
						<div className="taskTime">{item.startTime}-{item.endTime}</div>
						<div className="TaskTitle">{item.title}</div>
					</>
)
			})}
                </div>)
            })}
        </div>

    </>
  );
}

export default Day;

import * as DayConstants from '../../constants/planner'
import * as Constants from "../../constants/url"
import React,{useState,useEffect} from 'react';

import './FindTimeView.css'

 //https://codepen.io/ruphaa/pen/Kborrj
function Day({ findTimeResponse }) {

    findTimeResponse = {startDate: "1/1/2023", endDate:"7/1/2023",
    goals: [{text: "this is a goal"}],
    tasks: [{text: "this is a task"}],
    week: [{date: "1/1/2023", day:"Monday", sortedItems: [{startTime:"8am", endTime:"9am", title:"walk"}]}]
    }

  return (
    <>
<div class="paper">
  <div class="lines">
    <div class="text" contenteditable spellcheck="false">
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
        <div className="Week"><h2>Proposed tasks for the week</h2>
            {findTimeResponse.week.map((d) => {
                return(<div class="dayView" key={d.date}>
                    <div class="day"><h3> {d.day}</h3> </div>
                    <div class="date"><h3> {d.date} </h3> </div>
			{d.sortedItems.map((item) => {
				return(
					<>
						<div className="taskTime"><h4>{item.startTime}-{item.endTime} {item.title} </h4></div>
					</>
)
			})}
        </div>)
            })}
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

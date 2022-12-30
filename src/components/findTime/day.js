import * as DayConstants from '../../constants/planner'
import * as Constants from "../../constants/url"
import React,{useState,useEffect} from 'react';

 //https://codepen.io/ruphaa/pen/Kborrj
function Day({ findTimeResponse }) {

    findTimeResponse = {startDate: "77",
    goals: [{text: "this is a goal"}],
    tasks: [{text: "this is a task"}],
    week: [{date: "22", day:"Monday", sortedItems: [{time:"8am", title:"walk"}]}]
}

    const [quote, setQuote] = useState();


    // useEffect(() => {
    //     fetch(Constants.GET_LOVELY_QUOTE_ENDPOINT)
    //       .then(res => res.json())
    //       .then(data => setQuote(data));
    //   }, []);

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
        

        <div className="Week">
            {findTimeResponse.week.map((day) => {
                <div class="dayView"> {day.date}
                    <div class="day"> {day.day} </div>
                    <div class="date"> {day.date} </div>
                    {day.sortedItems.map((item) => {
                        <p>tea</p>
                    })}
                </div>   
            })}
        </div>

        {/* <div class="quote">
            <p>{quote.q}</p>
            <p>{quote.a}</p>
        </div> */}


    </>
  );
}
 
export default Day;
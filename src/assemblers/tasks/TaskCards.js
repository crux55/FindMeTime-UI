import React,{useState,useEffect} from 'react';
import * as Constants from "../../constants/url"

function RenderTaskCards({ items }) {
    return (
      <>
        {items.map(item => (
              <div className="card" key={item.TaskId}>
                <p>Title: {item.Title}</p>
                <p>Description: {item.Description}</p>
                <p> Duration: {item.Duration} </p>
                <label htmlFor={item.TaskId}>Find time?</label> <input type="checkbox" id="findTimeItems" name="findTimeItems" value={item.TaskId}/>
              </div>
          // <li key={item.TaskId}> Title: {item.Title}, Description: {item.Description}, Duration: {item.Duration}</li>
        ))}
      </>
    );
  }
  
  function GetTasks() {
    const [items, setItems] = useState();
    useEffect(() => {
      fetch(Constants.GET_ALL_TASKS_ENDPOINT)
        .then(res => res.json())
        .then(data => setItems(data));
    }, []);
    
    return (
      <div>
        {items && <RenderTaskCards items={items}/>}
      </div>
    );
  }

  export default GetTasks;
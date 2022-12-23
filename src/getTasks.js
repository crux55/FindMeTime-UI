import React,{useState,useEffect} from 'react';
import * as Constants from "./utils/constants"

function RenderTaskCards({ items }) {
    return (
      <>
        {items.map(item => (
              <div class="card">
                <p>Title: {item.Title}</p>
                <p>Description: {item.Description}</p>
                <p> Duration: {item.Duration} </p>
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
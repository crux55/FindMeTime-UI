import React,{useState,useEffect} from 'react';
import * as Constants from "../../constants/url"
import {useNavigate} from 'react-router-dom';


function RenderTaskCards({ items }) {
  const [checkedState, setCheckedState] = useState(
    new Array(0)
  );

  const [postResult, setPostResult] = useState();

  const [requestBody, setRequestBody] = useState();
  
  const handleOnChange = (id) => {
    if (checkedState.includes(id)){
      checkedState.splice(checkedState.indexOf(id), 1)
    } else {
      checkedState.push(id)
    }
  };

  const navigate = useNavigate();
  

  function handleSubmit(event) {
    
    var reqBody =  JSON.stringify(
      {
        "tasks": checkedState,
        "goals": null
      }
    )
    console.log(reqBody)
    navigate("/find_time", {state: {id: reqBody}}) 
  }

  
    return (
      <form onSubmit={handleSubmit}> 
        {items.map(item => (
              <div className="card" key={item.TaskId}>
                <p>Title: {item.Title}</p>
                <p>Description: {item.Description}</p>
                <p> Duration: {item.Duration} </p>
                <label htmlFor={item.TaskId}>Find time?</label> 
                <input  type="checkbox" 
                        id="findTimeItems" 
                        name="findTimeItems" 
                        value={item.TaskId} 
                        checked={setCheckedState[item.TaskId]} 
                        onChange={() => handleOnChange(item.TaskId)}/>
              </div>
          // <li key={item.TaskId}> Title: {item.Title}, Description: {item.Description}, Duration: {item.Duration}</li>
        ))}
        <input type="submit" value="Find time for these tasks" />
      </form>
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
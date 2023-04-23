import React, { useState } from 'react';
import fetch from 'isomorphic-fetch';
import * as Constants from '../../constants/url'
import { v4 as uuid } from 'uuid';

function CreateTagForm(){
      
    const [state, setState] = useState({name: '', description: '', timeSlots: []})
    const [timeSlots, setTimeSlots] = useState([{DayIndex: 0, StartTime: 0, EndTime: 0}])


    let handleChangeTimeSlot = (i, e) => {
      let newFormValues = [...timeSlots];
      newFormValues[i][e.target.name] = Number(e.target.value);
      setTimeSlots(newFormValues);
    }
        
    let addFormFields = () => {
      setTimeSlots([...timeSlots, {DayIndex: 0, StartTime: 0, EndTime: 0}])
    }
    
    let removeFormFields = (i) => {
        let newFormValues = [...timeSlots];
        newFormValues.splice(i, 1);
        setTimeSlots(newFormValues)
    }
      
  
    function handleChange(event) {
      const { name, value } = event.target;
      state[name] = value
    }
    function handleSubmit(event) {
        var data =  JSON.stringify(
          {
            "Name": state.name,
            "Description": state.description,
            "TimeSlots": timeSlots
          }
        )
        console.log(JSON.stringify(data))
        return fetch(Constants.CREATE_TAG_ENDPOINT, {
            method: 'POST',
            mode: 'cors',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                console.log(response);
            } else {
            console.log(response);
            }
        }).catch(err => console.log(err));
    }
  
      return (
	<form onSubmit={handleSubmit}>   
        <li>  
          <label>
            Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
        </li>
        <li>  
          <label>
            Description:
            <input type="text" name = "description" onChange={handleChange} />
          </label>
        </li>
                  {timeSlots.map((element, index) => (
                    <li key={uuid()}>
                    <label>
                      Day index:
                      <input type="number" name = "DayIndex" value={element.DayIndex} onChange={e => handleChangeTimeSlot(index, e)} />
                    </label>
                      <label>
                      Start Time:
                      <input type="number" name = "StartTime" value={element.StartTime} onChange={e => handleChangeTimeSlot(index, e)} />
                    </label>
                    <label>
                      End Time:
                      <input type="number" name = "EndTime" value={element.EndTime} onChange={e => handleChangeTimeSlot(index, e)} />
                    </label>
                    {
                      index ? 
                        <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                      : null
                    }
                    </li>
                  ))}
        <li>
        <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
          <input type="submit" value="Submit" />
        </li>
        </form>
      );
}

export default CreateTagForm;

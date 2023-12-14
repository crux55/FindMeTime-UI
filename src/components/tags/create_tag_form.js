import React, { useState } from 'react';
import fetch from 'isomorphic-fetch';
import * as Constants from '../../constants/url'
import { v4 as uuid } from 'uuid';

function CreateTagForm(){
      
    const [state, setState] = useState({name: '', description: '', timeSlots: []})
    const [timeSlots, setTimeSlots] = useState([{StartDayIndex: 0, StartTime: 0, EndDayIndex: 0, EndTime: 0}])
    const [errorMessage, setErrorMessage] = useState(null);


    let handleChangeTimeSlot = (i, e) => {
      e.preventDefault();
      const newFormValues = [...timeSlots];
      newFormValues[i][e.target.name] = Number(e.target.value);
      setTimeSlots(newFormValues);
    }
        
    let addFormFields = () => {
      setTimeSlots([...timeSlots, {StartDayIndex: 0, StartTime: 0, EndDayIndex: 0, EndTime: 0}])
    }
    
    let removeFormFields = (i) => {
        let newFormValues = [...timeSlots];
        newFormValues.splice(i, 1);
        setTimeSlots(newFormValues)
    }

    const handleCloseError = () => {
      setErrorMessage(null);
    };
      
  
    function handleChange(event) {
      event.preventDefault();
      const { name, value } = event.target;
      setState(prevState => ({ ...prevState, [name]: value }));
    }
    
    function handleSubmit(event) {
      event.preventDefault();
        let data =  JSON.stringify(
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
                setErrorMessage(null);
            } else {
              return response.json().then(data => {
                setErrorMessage(data.error);
                console.log(data.error);
              });
            }
        }).catch(err => console.log(err));
    }
  
      return (
        <div>
          {errorMessage && (
                <div className="error-banner">
                  {errorMessage}
                  <button onClick={handleCloseError}>&times;</button>
                </div>
              )}
        <form onSubmit={handleSubmit}>   
        <div className="tagcard" key="static">
          <label>
            Name:
            <input type="text" name="name" onChange={handleChange} required placeholder="Enter name" />
          </label>
          <label>
            Description:
            <input type="text" name="description" onChange={handleChange} />
          </label>
        </div>
        {timeSlots.map((element, index) => (
          <div className="tagcard" key={index}>
            <li>
              <label>
                Day start index:
                <input type="number" name="StartDayIndex" value={element.StartDayIndex} onChange={e => handleChangeTimeSlot(index, e)} required placeholder="0-6" />
              </label>
            </li>
            <li>
              <label>
                Start Time:
                <input type="number" name="StartTime" value={element.StartTime} onChange={e => handleChangeTimeSlot(index, e)} required placeholder="0-23" />
              </label>
            </li> 
            <li>
              <label>
                Day End index:
                <input type="number" name="EndDayIndex" value={element.EndDayIndex} onChange={e => handleChangeTimeSlot(index, e)} required placeholder="0-6" />
              </label>
            </li>
            <li>
              <label>
                End Time:
                <input type="number" name="EndTime" value={element.EndTime} onChange={e => handleChangeTimeSlot(index, e)} required placeholder="0-23" />
              </label>
            </li> 
            {
              index ? 
                <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
              : null
            }
          </div>
        ))}
        <div>
          <button className="button add" type="button" onClick={() => addFormFields()}>+</button>
          <input className="submit-button" type="submit" value="Submit" />
        </div>
      </form>
      </div>
      );
}

export default CreateTagForm;

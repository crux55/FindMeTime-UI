import React from 'react';
import fetch from 'isomorphic-fetch';
import * as Constants from '../../constants/url'

class CreateTagForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '', description: '',  mon_start: 0, mon_end: 24, 
                                                tue_start: 0, tue_end: 24, 
                                                wed_start: 0, wed_end: 24,
                                                thu_start: 0, thu_end: 24, 
                                                fri_start: 0, fri_end: 24, 
                                                sat_start: 0, sat_end: 24, 
                                                sun_start: 0, sun_end: 24}
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    }
    handleSubmit(event) {
        var data =  JSON.stringify(
          {
            "Name": this.state.name,
            "Description": this.state.description,
            "Mon_start": Number(this.state.mon_start),
            "Mon_end": Number(this.state.mon_end),
            "Tue_start": Number(this.state.tue_start),
            "Tue_end": Number(this.state.tue_end),
            "Wed_start": Number(this.state.wed_start),
            "Wed_end": Number(this.state.wed_end),
            "Thu_start": Number(this.state.thu_start),
            "Thu_end": Number(this.state.thu_end),
            "Fri_start": Number(this.state.fri_start),
            "Fri_end": Number(this.state.fri_end),
            "Sat_start": Number(this.state.sat_start),
            "Sat_end": Number(this.state.sat_end),
            "Sun_start": Number(this.state.sun_start),
            "Sun_end": Number(this.state.sun_end)
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
                alert(response);
            } else {
            alert(response);
            }
        }).catch(err => console.log(err));
    }
  
    render() {
      return (
	<form onSubmit={this.handleSubmit}>   
        <li>  
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
        </li>
        <li>  
          <label>
            Description:
            <input type="text" name = "description" value={this.state.description} onChange={this.handleChange} />
          </label>
        </li>
        <li>
          <label>
            Monday start time:
            <input type="number" name="mon_start" value={this.state.duration} onChange={this.handleChange} />
          </label>
        </li>
        <li>
          <label>
            Monday end time:
            <input type="number" name="mon_end" value={this.state.duration} onChange={this.handleChange} />
          </label>
        </li>
        <li>
          <label>
            Tuesday start time:
            <input type="number" name="tue_start" value={this.state.duration} onChange={this.handleChange} />
          </label>
        </li>
        <li>
          <label>
            Tuesday end time:
            <input type="number" name="tue_end" value={this.state.duration} onChange={this.handleChange} />
          </label>
        </li>
        <li>
          <label>
            Wednesday start time:
            <input type="number" name="wed_start" value={this.state.duration} onChange={this.handleChange} />
          </label>
        </li>
        <li>
          <label>
            Wednesday end time:
            <input type="number" name="wed_end" value={this.state.duration} onChange={this.handleChange} />
          </label>
        </li>
        <li>
          <label>
            Thursday start time:
            <input type="number" name="thu_start" value={this.state.duration} onChange={this.handleChange} />
          </label>
        </li>
        <li>
          <label>
            Thursday end time:
            <input type="number" name="thu_end" value={this.state.duration} onChange={this.handleChange} />
          </label>
        </li>
        <li>
          <label>
            Friday start time:
            <input type="number" name="fri_start" value={this.state.duration} onChange={this.handleChange} />
          </label>
        </li>
        <li>
          <label>
            Friday end time:
            <input type="number" name="fri_end" value={this.state.duration} onChange={this.handleChange} />
          </label>
        </li>
        <li>
          <label>
            Saturday start time:
            <input type="number" name="sat_start" value={this.state.duration} onChange={this.handleChange} />
          </label>
        </li>
        <li>
          <label>
            Saturday end time:
            <input type="number" name="sat_end" value={this.state.duration} onChange={this.handleChange} />
          </label>
        </li>
        <li>
          <label>
            Sunday start time:
            <input type="number" name="sun_start" value={this.state.duration} onChange={this.handleChange} />
          </label>
        </li>
        <li>
          <label>
            Sunday end time:
            <input type="number" name="sun_end" value={this.state.duration} onChange={this.handleChange} />
          </label>
        </li>
        <li>
          <input type="submit" value="Submit" />
        </li>
        </form>
      );
    }
  }

  export default CreateTagForm;

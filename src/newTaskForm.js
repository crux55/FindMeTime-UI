import React from 'react';
import fetch from 'isomorphic-fetch';
import * as Constants from './utils/constants'

class CreateTaskForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {title: '', description: '', duration: ''};
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
            "title": this.state.title,
            "description": this.state.description,
            "duration": this.state.duration
          }
        )
        console.log(JSON.stringify(data))
        return fetch(Constants.CREATE_TASKS_ENDPOINT, {
            method: 'POST',
            mode: 'cors',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response;
            } else {
            console.log('Somthing happened wrong');
            }
        }).catch(err => err);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>        
          <label>
            Title:
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label>
            Description:
            <input type="text" name = "description" value={this.state.description} onChange={this.handleChange} />
          </label>
          <label>
            Duration:
            <input type="text" name="duration" value={this.state.duration} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default CreateTaskForm;
import React from 'react';
import fetch from 'isomorphic-fetch';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {  console.log('triggered');}
    handleSubmit(event) {
        console.log('triggered');
        return fetch('http://localhost:8080/api/v1/task/create', {
            method: 'POST',
            body: {"title": "test",
            "description": "a test field",
            "duration": "12"},
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
        <form onSubmit={this.handleSubmit}>        <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleSubmit} />        </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default NameForm;
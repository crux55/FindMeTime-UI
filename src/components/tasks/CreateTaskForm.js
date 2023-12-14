import React, { useEffect, useState } from "react"
import Select from 'react-select'
import fetch from 'isomorphic-fetch'
import * as Constants from '../../constants/url'


function CreateTaskForm(){
    const [state, setState] = useState({title: '', description: '', duration: 0})
    const [tagsOnly, setTagsOnly] = useState([])
    const [tagsNot, setTagsNot] = useState([])
    const [options, setOptions] = useState()


    useEffect(() => {
      fetch(Constants.GET_ALL_TAGS_ENPOINT, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
      })
        .then(res => 
          res.json()
          )
        .then(data => {
          let tmp = []
          if (data !== undefined && data !== null) {
            data.forEach(tag => {
              tmp.push({ label: tag.Name, value: tag.Id });
            });
          }
          setOptions(tmp)
        })
    }, [])

  
    function handleChange(event) {
      const { name, value } = event.target;
      setState(prevState => ({ ...prevState, [name]: value }));
    }

    function handleSubmit(event) {
        const data =  JSON.stringify(
          {
            "title": state.title,
            "description": state.description,
            "duration": Number(state.duration),
            "tagsOnly": tagsOnly.map(to => {return {Id : to.value}}),
            "tagsNot" : tagsNot.map(tn => {return {Id: tn.value}})
          }
        )
        console.log(data)
        return fetch(Constants.CREATE_TASKS_ENDPOINT, {
            method: 'POST',
            mode: 'cors',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response
            } else {
            alert(response)
            }
        }).catch(err => console.log(err))
    }

  
      return (options && 
	<form onSubmit={handleSubmit}>        
          <label>
            Title:
            <input type="text" name="title" onChange={handleChange} />
          </label>
          <label>
            Description:
            <input type="text" name = "description" onChange={handleChange} />
          </label>
          <label>
            Duration:
            <input type="number" name="duration" onChange={handleChange} />
          </label>
          <label>
            Can only be done during:
            <Select onChange={value => setTagsOnly(value)} isMulti options={options} />
          </label>
          <label>
            Can not be done during:
            <Select onChange={value => setTagsNot(value)} isMulti options={options} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )
}

  export default CreateTaskForm

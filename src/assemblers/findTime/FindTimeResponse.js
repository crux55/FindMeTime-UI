import React,{useState,useEffect} from 'react';
import * as Constants from "../../constants/url"


  
function GetTasks() {
  const [findTimeResponse, setFindTimeResponse] = useState();
  useEffect(() => {
    fetch(Constants.GET_ALL_TASKS_ENDPOINT)
      .then(res => res.json())
      .then(data => setItems(setFindTimeResponse));
  }, []);
  
  return (
    <div>
      {findTimeResponse && <Day findTimeResponse={findTimeResponse}/>}
    </div>
  );
}

  export default FindTimeDayView;
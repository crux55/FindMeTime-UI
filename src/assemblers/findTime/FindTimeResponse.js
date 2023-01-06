import React,{useState,useEffect} from 'react';
import * as Constants from "../../constants/url"


  
function GetTasks() {
  const [findTimeResponse, setFindTimeResponse] = useState();
  useEffect(() => {
    fetch(Constants.FIND_TIME_ENDPOINT)
      .then(res => res.json())
      .then(data => setFindTimeResponse(data));
  }, []);
  
  return (
    <div>
      {findTimeResponse && <Day findTimeResponse={findTimeResponse}/>}
    </div>
  );
}

  export default FindTimeDayView;
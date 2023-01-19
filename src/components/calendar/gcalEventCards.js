import React, { useEffect, useState } from "react";
import "../../App.css";
import Event from "../event.js";
import { useGetEvents } from '../../hooks/gcalUtils'
import { useFindFreeTime } from "../../hooks/findTimeUtils";
function ListEventCards(){
  
  const events = useGetEvents();
  return (
    <div className="App py-8 flex flex-col justify-center">
      <ul>
        {events && <Event events={events}/>}
      </ul>
    </div>
  );
}
export default ListEventCards;
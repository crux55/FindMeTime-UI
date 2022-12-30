import React, { useEffect, useState } from "react";
import "../../App.css";
import Event from "../../components/event.js";
import { useGetEvents } from '../../hooks/gcalUtils'
import { useFindFreeTime } from "../../hooks/findTimeUtils";
function ListEventCards(){
  
  const events = useGetEvents();
  const time = useFindFreeTime(events);
  return (
    <div className="App py-8 flex flex-col justify-center">
      <h1 className="text-2xl font-bold mb-4">
        React App with Google Calendar API!
        Best time slot = {time}
        <ul>
          {events && <Event events={events}/>}
        </ul>
      </h1>
    </div>
  );
}
export default ListEventCards;
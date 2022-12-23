import React, { useEffect, useState } from "react";
import "./App.css";
import { gapi } from "gapi-script";
import Event from "./event.js";
 
function ListEventCards() {
  const [events, setEvents] = useState([]);
 
  const calendarID = "bukpvq98654ngvtmmjjhbl59rg@group.calendar.google.com";
  const apiKey = "AIzaSyBks1p87Xp6DKjbDcBtpMwSqQS83_jjhdI";
//   const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;
 
  const getEvents = (calendarID, apiKey) => {
    function initiate() {
      gapi.client
        .init({
          apiKey: apiKey,
        })
        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          });
        })
        .then(
          (response) => {
            let events = response.result.items;
            setEvents(events);
          },
          function (err) {
            return [false, err];
          }
        );
    }
    gapi.load("client", initiate);
  };
 
  useEffect(() => {
    const events = getEvents(calendarID, apiKey);
    setEvents(events);
  }, []);
 
  return (
    <div className="App py-8 flex flex-col justify-center">
      <h1 className="text-2xl font-bold mb-4">
        React App with Google Calendar API!
        <ul>
          {events?.map((event) => (
            <li key={event.id} className="flex justify-center">
              <Event description={event.summary} date={event.start.dateTime}/>
            </li>
          ))}
        </ul>
      </h1>
    </div>
  );
}
 
export default ListEventCards;
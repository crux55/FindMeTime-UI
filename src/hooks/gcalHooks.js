import { gapi } from "gapi-script";
import { useState, useEffect } from 'react';

const calendarID = ""
const apiKey = ""

export default function useGetEvents () {
  const [eventData, setEventData] = useState();
  async function initiate() {
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
            setEventData(response.result.items);
          },
          function (err) {
            return [false, err];
          }
        );
    
  }
  useEffect(() => {
    gapi.load("client", initiate);
  }, [])
  
  // return eventData;
} 
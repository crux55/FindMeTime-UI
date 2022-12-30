import { gapi } from "gapi-script";
import { useState, useEffect } from 'react';

export function useGetEvents () {
  const [eventData, setEventData] = useState();

    const calendarID = "bukpvq98654ngvtmmjjhbl59rg@group.calendar.google.com"
    const apiKey = "AIzaSyBks1p87Xp6DKjbDcBtpMwSqQS83_jjhdI"
  //   const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;
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
  
  return eventData;
} 
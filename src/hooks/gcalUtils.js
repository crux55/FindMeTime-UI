import { gapi } from "gapi-script";
import moment from "moment/moment";
import { useState, useEffect } from 'react';

const calendarID = "bukpvq98654ngvtmmjjhbl59rg@group.calendar.google.com"
const apiKey = "AIzaSyAjmgXRMnDc-kRUfyB8ivyZEGv4P8ZjLlE"

export function useGetEvents () {
  const [eventData, setEventData] = useState();


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


export const  CreateGcalEvents = (props) =>{
  async function initiate() {
    let findTimeResponse = props.props.state
    Object.entries(findTimeResponse.Week.Days).map(([date, day]) => {
      if (day['SortedItems']){
        for (let i = 0; i < day['SortedItems'].length; i++){
          let convertedDate = moment(date, 'YYYYMMDD').add(day['SortedItems'][i].StartTime, 'hours').utcOffset('+1100')
          let startTime = convertedDate.format('YYYY-MM-DDTHH:mm:ssZ').toString()
          let endTime = convertedDate.add(1, 'hours').format('YYYY-MM-DDTHH:mm:ssZ').toString()
          let event = GcalEvent(day['SortedItems'][i].Title, startTime, endTime)
          console.log(startTime)
          console.log(endTime)
            return gapi.client.request({
              path: "https://www.googleapis.com/calendar/v3/calendars/"+ calendarID + "/events",
              method: "POST",
              body: event,
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ya29.a0AX9GBdWaLRgV7AI2abBSK_AwUquCDdTFgFuphPfV04omU5F6KlqmI_wDRTGqtuEiIrOT64alUF3QZR1sS5QWe9hnpHCMePCZo2829QHIXxlEWdzdYtxFaq-xbFoaCAZRkGJEjBU9kK06QmkRWaUZaxRIheteaCgYKAXASARESFQHUCsbCLCIhsGXFYe01HJwR8jow4w0163`,
              }
            })
          .then(
            (response) => {
              console.log(response)
            },
            function (err) {
              console.log(err)
              return [false, err];
            }
          );
        }
      }
    })
  }

  useEffect(() => {
    gapi.load("client", initiate);
  }, [])
  
  return <></>;

}


function GcalEvent(summary, startTime, endTime){
  return {
      summary: summary,
      location: "",
      start: {
        dateTime: startTime,
        timeZone: "Australia/Melbourne",
      },
      end: {
        dateTime: endTime,
        timeZone: "Australia/Melbourne",
      },
      // recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
      attendees: [],
      reminders: {
        useDefault: false,
        overrides: [
          // { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 10 },
        ],
      },
  };
}

export default CreateGcalEvents;
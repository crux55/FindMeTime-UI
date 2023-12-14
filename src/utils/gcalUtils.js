import React,{useState,useEffect} from 'react';
import moment from 'moment/moment';
import GcalEvent from '../models/gcalEvent'
import { gapi } from 'gapi-script';


export const  CreateGcalEvents = (props) =>{
  async function initiate() {
    const calendarID = ""
    let findTimeResponse = props.props.state
    Object.entries(findTimeResponse.Week.Days).map(([date, day]) => {
      if (day['SortedItems']){
        for (let i = 0; i < day['SortedItems'].length; i++){
          let convertedDate = moment(date, 'YYYYMMDD').add(day['SortedItems'][i].StartTime, 'hours').utcOffset('+1100')
          let startTime = convertedDate.format('YYYY-MM-DDTHH:mm:ssZ').toString()
          let endTime = convertedDate.add(1, 'hours').format('YYYY-MM-DDTHH:mm:ssZ').toString()
          let event = GcalEvent(day['SortedItems'][i].Title, startTime, endTime)
            return gapi.client.request({
              path: "https://www.googleapis.com/calendar/v3/calendars/"+ calendarID + "/events",
              method: "POST",
              body: event,
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer `,
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

export default CreateGcalEvents;
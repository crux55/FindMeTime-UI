import React,{useState,useEffect} from 'react';
import moment from 'moment/moment';
import GcalEvent from '../models/gcalEvent'
import { gapi } from 'gapi-script';


export const  CreateGcalEvents = (props) =>{
  async function initiate() {
    const calendarID = "bukpvq98654ngvtmmjjhbl59rg@group.calendar.google.com"
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

export default CreateGcalEvents;
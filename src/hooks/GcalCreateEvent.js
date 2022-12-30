import {gapi} from "gapi-script"

const GCalAddEvent = (calendarID, event) => {
  function initiate() {
    calendarID = "bukpvq98654ngvtmmjjhbl59rg@group.calendar.google.com";
    gapi.client
      .request({
        path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
        method: "POST",
        body: event,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ya29.a0AX9GBdVQDrNg-CQ6NIz0mckou9e0TWHVsjdOhg7QxTg4PpGvV7gxYEEtBxtqGWb_Kjke8vE48s8qspWfLQ1gF37yM1DxLtYNIkWz01pUSZtMsIEixnBJqZ3AbskRBQBDPBsIISN-zCgzicpNKFZToFSzXxIQaCgYKAQgSARESFQHUCsbCDwt3pUn2Uy96d9HjUaColQ0163`,
        },
      })
      .then(
        (response) => {
          return [true, response];
        },
        function (err) {
          console.log(err);
          return [false, err];
        }
      );
  }
  gapi.load("client", initiate);
};
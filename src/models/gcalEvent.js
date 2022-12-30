function Event(summary, startTime, endTime){
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
        recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
        attendees: [],
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 },
            { method: "popup", minutes: 10 },
          ],
        },
    };
}
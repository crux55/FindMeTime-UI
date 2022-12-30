import React from "react";
 
function Event({ events }) {
  return (
    <>
    {events?.map((event) => (
      <li key={event.id} className="flex justify-center">
        <div class="mt-4 w-1/4 p-1 shadow-xl bg-gradient-to-r from-blue-500 via-navy-500 to-purple-500 rounded-2xl">
          <span class="block bg-white sm:p-2 rounded-xl" href="">
            <div class="sm:pr-8">
              <p class="mt-2 text-sm text-black">{event.summary}</p>
              <p>{event.start.dateTime}</p>
            </div>
          </span>
        </div>
      </li>
    ))}
    </>
  );
}
 
export default Event;
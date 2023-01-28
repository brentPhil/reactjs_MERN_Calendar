import moment from "moment/moment"
import { useEffect, useState } from "react"

const EventsList = ({ events }) => {

  const eventColorClass = (eventColor) =>
    eventColor === "blue"
      ? "bg-blue-500/70"
      : eventColor === "orange"
      ? "bg-orange-500/70"
      : eventColor === "green"
      ? "bg-green-500/70"
      : eventColor === "yellow"
      ? "bg-yellow-500/70"
      : eventColor === "violet"
      ? "bg-violet-500/70"
      : eventColor === "red"
      ? "bg-red-500/70"
      : ""

  return (
    <div>
      <div className="lg:px-5 p-3 text-gray-800 font-semibold text-lg border-b rounded-t-md">
        Events List
      </div>
      <div className="lg:p-5 p-3 grid gap-2">
        {events.map((event, index) => (
          <div
            key={index}
            className={`p-2 grid grid-cols-8 gap-3 font-semibold text-slate-600 hover:text-slate-800 border bg-slate-50 hover:bg-slate-100 capitalize text-sm rounded-md cursor-pointer ruonded-md`}>
            <div className="col-span-1 flex items-center justify-center">
              <div
                className={`p-2 w-fit rounded-full ${eventColorClass(
                  event.selectedColor
                )}`}></div>
            </div>
            <div className="truncate col-span-3 px-2 border-l">
              {event.eventName}
            </div>
            <div className="truncate col-span-4 px-2 border-l">
              {event.dateSelected}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventsList

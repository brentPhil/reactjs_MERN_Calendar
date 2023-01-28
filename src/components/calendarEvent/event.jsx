import moment from "moment/moment"
import { useEffect, useState } from "react"

const EventsList = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const storedEvents = localStorage.getItem("events")
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents))
    }
  }, [])

  const eventColorClass = (eventColor) =>
    eventColor === "blue"
      ? "bg-blue-500/60"
      : eventColor === "orange"
      ? "bg-orange-500/60"
      : eventColor === "green"
      ? "bg-green-500/60"
      : eventColor === "yellow"
      ? "bg-yellow-500/60"
      : eventColor === "violet"
      ? "bg-violet-500/60"
      : eventColor === "red"
      ? "bg-red-500/60"
      : ""

  return (
    <div>
      <div className="px-5 py-3 text-gray-800 font-semibold text-lg border-b rounded-t-md">
        Events List
      </div>
      <div className="p-3 grid gap-2">
        {events.map((event, index) => (
          <div
            key={index}
            className={`p-2 grid grid-cols-6 gap-3 font-semibold text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 capitalize text-sm rounded-md cursor-pointer ruonded-md`}>
            <div className="col-span-1 flex items-center justify-center">
              <div
                className={`p-2 w-fit rounded-full ${eventColorClass(
                  event.selectedColor
                )}`}></div>
            </div>
            <div className="truncate col-span-5">
              {event.eventName}
              <div className="truncate text-[12px]">{event.dateSelected}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventsList

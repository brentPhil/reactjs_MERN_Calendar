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
      ? "bg-blue-500/25 hover:bg-blue-500/40 text-blue-700"
      : eventColor === "orange"
      ? "bg-orange-500/25 hover:bg-orange-500/40 text-orange-700"
      : eventColor === "green"
      ? "bg-green-500/25 hover:bg-green-500/40 text-green-700"
      : eventColor === "yellow"
      ? "bg-yellow-500/25 hover:bg-yellow-500/40 text-yellow-700"
      : eventColor === "violet"
      ? "bg-violet-500/25 hover:bg-violet-500/40 text-violet-700"
      : eventColor === "red"
      ? "bg-red-500/25 hover:bg-red-500/40 text-red-700"
      : ""

  return (
    <div className="bg-white shadow-lg border rounded-md">
      <div className="px-5 py-3 text-gray-800 font-semibold text-lg border-b rounded-t-md">
        Events List
      </div>
      <div className="p-5 grid gap-2">
        {events.map((event, index) => (
          <div
            key={index}
            className={`px-4 py-2 grid grid-cols-3 gap-3 capitalize text-sm rounded-md cursor-pointer ruonded-md ${eventColorClass(
              event.selectedColor
            )}`}>
            <div className="truncate col-span-1">{event.eventName}</div>
            <div className="truncate col-span-2">{event.dateSelected}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventsList

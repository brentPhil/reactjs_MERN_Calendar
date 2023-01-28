import { motion } from "framer-motion"
import { useState } from "react"
import { MdDeleteForever } from "react-icons/md"
import { FcCalendar } from "react-icons/fc"
import { BiTime } from "react-icons/bi"


const EventsList = ({ events, setEvents }) => {
  const [selectedId, setSelectedId] = useState(null)
  console.log(events)
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
  const border = (eventColor) =>
    eventColor === "blue"
      ? "border-blue-500/70"
      : eventColor === "orange"
      ? "border-orange-500/70"
      : eventColor === "green"
      ? "border-green-500/70"
      : eventColor === "yellow"
      ? "border-yellow-500/70"
      : eventColor === "violet"
      ? "border-violet-500/70"
      : eventColor === "red"
      ? "border-red-500/70"
      : ""

  const handleDelete = (index) => {
    const updatedEvents = [...events]
    updatedEvents.splice(index, 1)
    setEvents(updatedEvents)
    localStorage.setItem("events", JSON.stringify(updatedEvents))
  }

  return (
    <div>
      <div className="lg:px-5 p-3 text-gray-800 font-semibold text-lg border-b rounded-t-md">
        Events List
      </div>
      <div className="lg:p-5 p-3 grid gap-2">
        {events.map((event, index) => (
          <>
            <motion.div
              layoutId={event.newId}
              key={index}
              onClick={() => {
                selectedId
                  ? selectedId.newId !== event.newId
                    ? setSelectedId(event)
                    : setSelectedId(null)
                  : setSelectedId(event)
              }}
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
            </motion.div>

            {selectedId && selectedId.newId === event.newId && (
              <form onSubmit={handleDelete}>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  layoutId={selectedId}
                  className={`border-t-4 flex rounded-b-md justify-between shadow-md text-sm capitalize ${border(
                    selectedId.selectedColor
                  )}`}>
                  <div className="flex">
                    <div className="flex pl-3 py-4">
                      <FcCalendar className="text-[2rem]" />
                    </div>
                    <div className="py-4 px-1">
                      <div className="truncate mb-2 items-center flex gap-2 text-sm px-2">
                        {selectedId.dateSelected}
                      </div>
                      <div className="truncate mb-1 text-[1rem] items-center px-2">
                        <div>
                          <div className="text-lg font-semibold">
                            {selectedId.eventName}
                          </div>
                          <div className="truncate flex gap-1 items-center text-[12px]">
                            <BiTime className="text-[13px]" />
                            {selectedId.formatStart} - {selectedId.formatEnd}
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] px-2">
                        {selectedId.eventDescription}
                      </div>
                    </div>
                  </div>

                  <button className="p-3 outline-none w-fit flex items-center rounded-br-md text-[1.5rem] text-red-500 cursor-pointer hover:text-red-600 bg-red-100 hover:bg-red-200">
                    <MdDeleteForever />
                  </button>
                </motion.div>
              </form>
            )}
          </>
        ))}
      </div>
    </div>
  )
}

export default EventsList

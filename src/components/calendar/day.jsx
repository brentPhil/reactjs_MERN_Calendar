import { motion } from "framer-motion"
import React from "react"

export const Day = ({ day, onClick }) => {
  const className = `text-start sm:h-20 p-2 sm:px-3 sm:text-[.8rem] lg:max-h-48 max-h-16 rounded-[5px]  ${
    day.event === null && "bg-slate-50 text-slate-500"
  } 
  ${
    day.isCurrentDay
      ? "bg-red-500 !text-white hover:bg-red-400"
      : "bg-slate-100"
  }
  ${day.availableDays && "hover:bg-blue-100 bg-blue-100 cursor-pointer"}`


  const eventColorClass =
    day.eventColor === "blue"
      ? "bg-blue-500/70 sm:bg-blue-500/30 text-blue-700"
      : day.eventColor === "orange"
      ? "bg-orange-500/70 sm:bg-orange-500/30 text-orange-700"
      : day.eventColor === "green"
      ? "bg-green-500/70 sm:bg-green-500/30 text-green-700"
      : day.eventColor === "yellow"
      ? "bg-yellow-500/70 sm:bg-yellow-500/30 text-yellow-700"
      : day.eventColor === "violet"
      ? "bg-violet-500/70 sm:bg-violet-500/30 text-violet-700"
      : day.eventColor === "red"
      ? "bg-red-500/70  sm:bg-red-500/30 text-red-700"
      : ""
  const eventClass = `text-[12px] lg:mt-3 mt-1 px-2 py-[2px] rounded-md capitalize ${eventColorClass}`

  return (
    <div onClick={onClick} className={className}>
      <div className="text-center sm:text-start text-[12px]">{day.value}</div>

      {day.event && (
        <div className={eventClass}>
          <div className="hidden sm:block truncate">{day.event.eventName}</div>
        </div>
      )}
    </div>
  )
}

{
  /* SHOWS NUMBER OF EVENTS IN EACH DAY {day.eventNum > 0 && day.eventNum} */
}

export default Day

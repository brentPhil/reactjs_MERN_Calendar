import React from "react"

export const Day = ({ day, onClick }) => {
  const className = `text-start sm:h-20 py-2 px-3 text-[.8rem] rounded-md hover:bg-red-200 ${
    day.value === "padding" ? "padding" : ""
  } 
  ${
    day.isCurrentDay
      ? "bg-red-400 text-white"
      : !day.availableDays
      ? "text-slate-500 bg-slate-100"
      : "bg-slate-100"
  }`

  const eventColorClass =
    day.eventColor === "blue"
      ? "border-blue-500 bg-blue-500/25 text-blue-700"
      : day.eventColor === "orange"
      ? "border-orange-500 bg-orange-500/25 text-orange-700"
      : day.eventColor === "green"
      ? "border-green-500 bg-green-500/25 text-green-700"
      : day.eventColor === "yellow"
      ? "border-yellow-500 bg-green-500/25 text-yellow-700"
      : day.eventColor === "violet"
      ? "border-violet-500 bg-violet-500/25 text-violet-700"
      : day.eventColor === "red"
      ? "border-red-500 bg-red-500/25 text-red-700"
      : ""
  const eventClass = `text-[12px] mt-1 truncate px-2 py-1 border-l-4 ${eventColorClass}`
  
  return (
    <div onClick={onClick} className={className}>
      {day.value === "padding" ? "" : day.value}

      {day.event && (
          <div
            className={eventClass}>
            {day.event.eventName}
          </div>
      )}
    </div>
  )
}

          {
            /* SHOWS NUMBER OF EVENTS IN EACH DAY {day.eventNum > 0 && day.eventNum} */
          }

export default Day

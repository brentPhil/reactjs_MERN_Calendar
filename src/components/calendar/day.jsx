import React from "react"

export const Day = ({ day, onClick }) => {
  const className = `text-start sm:h-20 py-2 px-3 text-[.8rem] rounded-[5px]  ${
    day.event === null && "bg-slate-100 text-slate-500"
  } 
  ${
    day.isCurrentDay
      ? "bg-red-500 !text-white hover:bg-red-400"
      : "bg-slate-200"
  }
  ${day.availableDays && "hover:bg-blue-100 bg-blue-100 cursor-pointer"}`


  const eventColorClass =
    day.eventColor === "blue"
      ? "bg-blue-500/25 text-blue-700"
      : day.eventColor === "orange"
      ? "bg-orange-500/25 text-orange-700"
      : day.eventColor === "green"
      ? "bg-green-500/25 text-green-700"
      : day.eventColor === "yellow"
      ? "bg-yellow-500/25 text-yellow-700"
      : day.eventColor === "violet"
      ? "bg-violet-500/25 text-violet-700"
      : day.eventColor === "red"
      ? "bg-red-500/25 text-red-700"
      : ""
  const eventClass = `text-[12px] mt-1 truncate px-2 py-1 rounded-md capitalize ${eventColorClass}`

  return (
    <div onClick={onClick} className={className}>
      {day.value}

      {day.event && <div className={eventClass}>{day.event.eventName}</div>}
    </div>
  )
}

{
  /* SHOWS NUMBER OF EVENTS IN EACH DAY {day.eventNum > 0 && day.eventNum} */
}

export default Day

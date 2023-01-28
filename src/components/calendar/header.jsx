import React from "react"
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"

const HeaderCalendar = ({ onBack, onNext, dateDisplay }) => {
  return (
    <div className="flex justify-between items-center border-b p-5">
      <div>
        <div className="text-xl font-bold">Event Calendar</div>
        <div className="text-sm text-slate-500">{dateDisplay}</div>
      </div>
      <div className="flex w-fit gap-2">
        <button
          className="text-md rounded-full hover:bg-slate-300/40 p-2 bg-slate-300/30"
          onClick={onBack}>
          <IoChevronBackOutline />
        </button>

        <button
          className="text-md rounded-full hover:bg-slate-300/40 p-2 bg-slate-300/30"
          onClick={onNext}>
          <IoChevronForwardOutline />
        </button>
      </div>
    </div>
  )
}

export default HeaderCalendar

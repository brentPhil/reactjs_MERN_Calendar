import React from "react"
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"

const HeaderCalendar = ({ onBack, onNext, dateDisplay }) => {
  return (
    <div className="flex justify-between items-center p-5 rounded-t-md rounded-b-xl bg-red-500 text-white">
      <div>
        <div className="text-xl font-bold">Event Calendar</div>
        <div className="text-sm text-slate-50">
          {dateDisplay}
        </div>
      </div>
      <div className="flex w-fit gap-2">
        <button
          className="text-white text-md rounded-full hover:bg-white/60 p-2 bg-white/30"
          onClick={onBack}>
          <IoChevronBackOutline />
        </button>

        <button
          className="text-white text-md rounded-full hover:bg-white/60 p-2 bg-white/30"
          onClick={onNext}>
          <IoChevronForwardOutline />
        </button>
      </div>
    </div>
  )
}

export default HeaderCalendar

import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Modal from '../components/calendarModal/Modal';
import { AnimatePresence } from 'framer-motion';
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"


const Calendar = () => {
  const [date, setDate] = useState(moment());
  const [days, setDays] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment());
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("events"))
  )

  const current_day = moment().format("YYYY-MM-DD"); 

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  const handlePreviousMonth = () => {
    setDate(date.subtract(1, 'months'));
    setDays([]);
  };

  const handleNextMonth = () => {
    setDate(date.add(1, 'months'));
    setDays([]);
  };

  if (days.length === 0) {
    const firstDayOfMonth = date.startOf('month');
    const lastDayOfMonth = date.endOf('month');
    const numberOfDaysInMonth = lastDayOfMonth.date();

    let blankDays = firstDayOfMonth.day();
    if (blankDays === 0) {
      blankDays = 7;
    }

    const lastMonth = moment().subtract(1, 'month');

    const lastMonthDays = lastMonth.daysInMonth();
    for (let i = lastMonthDays - blankDays + 2; i <= lastMonthDays; i++) {
      days.push(
        <div
          key={i}
          className="text-start md:h-20 py-2 px-3 rounded-md bg-gray-300 text-gray-500">
          {i}
        </div>
      )
    }

    const groupedEvents = events.reduce((acc, event) => {
      const day = moment(event.eventDate).format("YYYY-MM-DD")
      if (!acc[day]) {
        acc[day] = []
      }
      acc[day].push(event)
      return acc
    }, {})

    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      const currentDay = moment().date(i).month(date.month()).year(date.year());
      const className = `text-start sm:h-20 py-2 px-3 rounded-md hover:bg-red-200 ${
        current_day === currentDay.format("YYYY-MM-DD")
          ? "bg-red-400 text-white"
          : currentDay.format("YYYY-MM-DD") > current_day
          ? "bg-red-50"
          : "bg-slate-100"
      }`

      const dayEvents = groupedEvents[currentDay.format("YYYY-MM-DD")] || []
      const numEvents = dayEvents.length
      
      days.push(
        <div
          key={`${currentDay.format("MM-YYYY")}-${i}`}
          className={className}
          onClick={() => handleDayClick(currentDay)}>
          <div className="mb-2">{i}</div>
          {numEvents > 0 && <div>{numEvents} events</div>}
          {dayEvents.slice(0, 1).map((event, index) => (
            <div
              key={index}
              className="bg-yellow-200 text-[12px] text-zinc-700 pl-1 border-l-4 border-yellow-500">
              {event.eventName}
            </div>
          ))}
        </div>
      )
    }

    const handleDayClick = (date) => {
      if (date.format("YYYY-MM-DD") > current_day) {
        modalOpen ? closeModal() : openModal()
        setSelectedDate(date)
      }
    }
  }

  return (
    <div className="px-5 font-mono">
      <div className="relative bg-white rounded-lg md:w-5/6 max-w-5xl lg:w-4/5 m-auto my-10 sm:w-100 min-w-[400px] shadow-lg">
        <div className="flex justify-between items-center p-5 rounded-t-md rounded-b-xl bg-red-500 text-white">
          <div>
            <div className="text-xl font-bold">Event Calendar</div>
            <div className="text-sm text-slate-50">
              {date.format("MMMM YYYY")}
            </div>
          </div>
          <div className="flex w-fit gap-2">
            <button
              className="text-white text-md rounded-full hover:bg-white/60 p-2 bg-white/30"
              onClick={handlePreviousMonth}>
              <IoChevronBackOutline />
            </button>

            <button
              className="text-white text-md rounded-full hover:bg-white/60 p-2 bg-white/30"
              onClick={handleNextMonth}>
              <IoChevronForwardOutline />
            </button>
          </div>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-7 gap-3">
            <div className="text-center py-2 px-3 bg-red-500 text-slate-100 font-semibold rounded-md">
              Sun
            </div>
            <div className="text-center py-2 px-3 bg-red-500 text-slate-100 font-semibold rounded-md">
              Mon
            </div>
            <div className="text-center py-2 px-3 bg-red-500 text-slate-100 font-semibold rounded-md">
              Tue
            </div>
            <div className="text-center py-2 px-3 bg-red-500 text-slate-100 font-semibold rounded-md">
              Wed
            </div>
            <div className="text-center py-2 px-3 bg-red-500 text-slate-100 font-semibold rounded-md">
              Thu
            </div>
            <div className="text-center py-2 px-3 bg-red-500 text-slate-100 font-semibold rounded-md">
              Fri
            </div>
            <div className="text-center py-2 px-3 bg-red-500 text-slate-100 font-semibold rounded-md">
              Sat
            </div>
          </div>
          <div className="grid grid-cols-7 gap-3 pt-3">{days}</div>
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={closeModal}
            dateSelected={selectedDate}
          />
        )}
      </AnimatePresence>
    </div>
  )
  };
  
  export default Calendar;
  

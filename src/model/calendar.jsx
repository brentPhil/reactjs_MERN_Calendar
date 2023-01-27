import moment from "moment/moment"
import React, { useEffect, useState } from "react"
import Modal from "../components/calendarModal/Modal"
import { AnimatePresence } from "framer-motion"
import Day from "../components/calendar/day"
import HeaderCalendar from "../components/calendar/header"
import { useDate } from "../components/calendar/useDate"
import EventsList from "../components/calendarEvent/event"

const days_class = `text-center py-2 px-3 bg-slate-200 text-gray-800 font-semibold rounded-[5px]`

const Calendar = () => {
  const [nav, setNav] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(moment())
  const [events, setEvents] = useState([])

  useEffect(() => {
    // Get the events data from local storage
    const eventsData = JSON.parse(localStorage.getItem("events"))
    if (eventsData) {
      setEvents(eventsData)
    }
    // Listen for changes in the local storage
    window.addEventListener("storage", (e) => {
      if (e.key === "events") {
        setEvents(JSON.parse(e.newValue))
      }
    })
  }, [])

  const closeModal = () => setModalOpen(false)
  const openModal = () => setModalOpen(true)

  const { days, dateDisplay } = useDate(events, nav)

  return (
    <div className="px-20 h-screen py-10 font-mono grid lg:grid-cols-4 sm:grid-cols-1 gap-4">
      <div className="relative bg-white col-span-3 border rounded-lg max-w-5xl sm:w-100 min-w-[400px] shadow-lg">
        <HeaderCalendar
          dateDisplay={dateDisplay}
          onNext={() => setNav(nav + 1)}
          onBack={() => setNav(nav - 1)}
        />
        <div className="p-5">
          <div className="grid grid-cols-7 gap-3">
            <div className={days_class}>Sun</div>
            <div className={days_class}>Mon</div>
            <div className={days_class}>Tue</div>
            <div className={days_class}>Wed</div>
            <div className={days_class}>Thu</div>
            <div className={days_class}>Fri</div>
            <div className={days_class}>Sat</div>
          </div>

          <div className="grid grid-cols-7 gap-3 pt-3">
            {days.map((d, index) => (
              <Day
                key={index}
                day={d}
                onClick={() => {
                  if (moment(d.date).isAfter(moment())) {
                    modalOpen ? closeModal() : openModal()
                    setSelectedDate(d.date)
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <EventsList />

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
}

export default Calendar
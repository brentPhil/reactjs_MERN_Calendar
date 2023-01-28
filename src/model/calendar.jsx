import moment from "moment/moment"
import React, { useEffect, useState } from "react"
import Modal from "../components/calendarModal/Modal"
import { AnimatePresence } from "framer-motion"
import Day from "../components/calendar/day"
import HeaderCalendar from "../components/calendar/header"
import { useDate } from "../components/calendar/useDate"
import EventsList from "../components/calendarEvent/event"

const days_class = `text-center text-[12px] md:text-sm sm:py-2 p-1 sm:px-3 bg-slate-200 text-gray-800 font-semibold rounded-[5px]`

const Calendar = () => {
  const [nav, setNav] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(moment())
  const [events, setEvents] = useState(
    localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : []
  )
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
    <div className="p-5 sm:p-10 md:p-5 min-h-screen lg:px-20 max-w-7xl m-auto md:grid md:grid-cols-3 md:gap-5">
      <div className="relative bg-white col-span-2 border rounded-lg sm:w-100 min-w-[300px] h-fit shadow-lg">
        <HeaderCalendar
          dateDisplay={dateDisplay}
          onNext={() => setNav(nav + 1)}
          onBack={() => setNav(nav - 1)}
        />
        <div className="sm:p-5 p-3">
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
      <div className="mt-5 md:m-0 bg-white h-fit shadow-lg border min-w-[300px] rounded-md">
        <EventsList events={events} setEvents={setEvents} />
      </div>

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={closeModal}
            dateSelected={selectedDate}
            setEvents={setEvents}
            events={events}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Calendar

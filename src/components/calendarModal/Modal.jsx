import { motion } from "framer-motion"
import { useState } from "react"
import Backdrop from "../backDrop/backDrop"
import { BsCalendar4Week } from "react-icons/bs"
import moment from "moment/moment"
import ColorPicker from "../modalComp/colorPicker"
import TimePicker from "../modalComp/timePicker"

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 30,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
}

const Modal = ({ handleClose, dateSelected, setEvents, events }) => {
  const [selectedColor, setSelectedColor] = useState("red")
  const [eventName, setEventName] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [eventDescription, setEventDescription] = useState("")

  const remaining = 50 - eventName.length

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEvent = {
      selectedColor,
      eventName,
      dateSelected,
      startTime,
      endTime,
      eventDescription,
    }
    setEvents([...events, newEvent])
    localStorage.setItem("events", JSON.stringify([...events, newEvent]))
    handleClose()
  }
  // const handleUpdate = (e, index) => {
  //   e.preventDefault()
  //   const updatedEvents = [...events]
  //   updatedEvents[index] = {
  //     selectedColor,
  //     eventName,
  //     eventDate,
  //     startTime,
  //     endTime,
  //     eventDescription,
  //   }
  //   setEvents(updatedEvents)
  //   localStorage.setItem("events", JSON.stringify(updatedEvents))
  // }

  // const handleDelete = (index) => {
  //   const updatedEvents = [...events]
  //   updatedEvents.splice(index, 1)
  //   setEvents(updatedEvents)
  //   localStorage.setItem("events", JSON.stringify(updatedEvents))
  // }

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="min-w-[350px] max-w-[400px] mx-1 shadow-lg w-4/5 sm:w-2/4 md:w-96 bg-white rounded-md min-h-[300px]"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit">
        <form onSubmit={handleSubmit}>
          <div className="px-6 pt-8 grid gap-3">
            <div className="text-xl mb-3 flex justify-between items-center font-bold text-gray-700">
              <div className="w-full rounded-md text-neutral-70">
                <h1>Create Event</h1>
                <div className="text-sm font-normal">
                  {moment(dateSelected).format("LL")}
                </div>
              </div>
              <BsCalendar4Week className="mt-1" />
            </div>

            <div className="relative">
              <input
                type="text"
                className="w-full border-b-2 outline-none py-2 bg-inherit"
                maxLength={50}
                placeholder="Event Title"
                onChange={(e) => setEventName(e.target.value)}
                value={eventName}
              />
              <div className="text-sm absolute top-0 text-[12px] right-0 bottom-0 flex items-center text-slate-700">
                <div className="bg-slate-300 font-semibold py-1 px-2 rounded-md">
                  {remaining}
                </div>
              </div>
            </div>

            <ColorPicker
              s_color={selectedColor}
              setColor={(e) => setSelectedColor(e)}
            />

            <div>
              <TimePicker
                onStartTimeChange={(c) => setStartTime(c)}
                onEndTimeChange={(c) => setEndTime(c)}
                s_time={startTime}
                e_time={endTime}
              />
            </div>

            <div className="mt-2">
              <textarea
                className="w-full rounded-lg p-2 outline-none bg-slate-200"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                placeholder="Description"
              />
            </div>
          </div>
          <div className="flex justify-end bg-slate-100 mt-5 rounded-b-md p-6">
            <button
              type="button"
              className="bg-slate-300 hover:bg-slate-400 text-slate-800 rounded-lg py-2 px-4 mr-3"
              onClick={handleClose}>
              Cancel
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4">
              Create
            </button>
          </div>
        </form>
      </motion.div>
    </Backdrop>
  )
}

export default Modal

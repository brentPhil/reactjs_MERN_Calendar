import { BsDash } from "react-icons/bs"

function TimePicker({ onStartTimeChange, onEndTimeChange, s_time, e_time }) {
  return (
    <>
      <div className="flex items-center">
        <input
          type="time"
          className="bg-slate-200 outline-none rounded-md w-full p-2 text-gray-700"
          value={s_time}
          onChange={(e) => onStartTimeChange(e.target.value)}
        />
        <BsDash className="w-8" />
        <input
          type="time"
          className="bg-slate-200 outline-none rounded-md w-full p-2 text-gray-700"
          value={e_time}
          onChange={(e) => onEndTimeChange(e.target.value)}
        />
      </div>
    </>
  )
}

export default TimePicker

import React, { useState } from "react"
import { BsCheckLg } from "react-icons/bs"

const ColorPicker = ({ s_color, setColor }) => {
  const pickerClass = ` text-white w-6 h-6 relative rounded-full m-2`
  const pk_outline = ` outline outline-offset-1`
  const ch_icon = `absolute m-auto left-[6px] top-[6px] text-[13px]`

  return (
    <div className="flex">
      <div className="grid items-center mr-2">Color</div>
      <button
        type="button"
        className={
          `bg-red-500 hover:bg-red-600 ${
            s_color === "red" && `${pk_outline} outline-red-300`
          }` + pickerClass
        }
        onClick={() => setColor("red")}>
        {s_color === "red" && <BsCheckLg className={ch_icon} />}
      </button>
      <button
        type="button"
        className={
          `bg-orange-500 hover:bg-orange-600 ${
            s_color === "orange" && `${pk_outline} outline-orange-300`
          }` + pickerClass
        }
        onClick={() => setColor("orange")}>
        {s_color === "orange" && <BsCheckLg className={ch_icon} />}
      </button>
      <button
        type="button"
        className={
          `bg-yellow-500 hover:bg-yellow-600 ${
            s_color === "yellow" && `${pk_outline} outline-yellow-300`
          }` + pickerClass
        }
        onClick={() => setColor("yellow")}>
        {s_color === "yellow" && <BsCheckLg className={ch_icon} />}
      </button>
      <button
        type="button"
        className={
          `bg-green-500 hover:bg-green-600 ${
            s_color === "green" && `${pk_outline} outline-green-300`
          }` + pickerClass
        }
        onClick={() => setColor("green")}>
        {s_color === "green" && <BsCheckLg className={ch_icon} />}
      </button>
      <button
        type="button"
        className={
          `bg-blue-500 hover:bg-blue-600 ${
            s_color === "blue" && `${pk_outline} outline-blue-300`
          }` + pickerClass
        }
        onClick={() => setColor("blue")}>
        {s_color === "blue" && <BsCheckLg className={ch_icon} />}
      </button>
      <button
        type="button"
        className={
          `bg-purple-500 hover:bg-purple-600 ${
            s_color === "violet" && `${pk_outline} outline-violet-300`
          }` + pickerClass
        }
        onClick={() => setColor("violet")}>
        {s_color === "violet" && <BsCheckLg className={ch_icon} />}
      </button>
      {/* <p className="ml-2">Selected color: {selectedColor}</p> */}
    </div>
  )
}

export default ColorPicker

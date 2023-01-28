import moment from "moment/moment"
import { useEffect, useState } from "react"

export const useDate = (events, nav) => {
  const [dateDisplay, setDateDisplay] = useState("")
  const [days, setDays] = useState([])

  useEffect(() => {
    const eventForDate = (date) => {
      try {
        return events.find(
          (e) =>
            moment(date).isSame(moment(e.dateSelected)) &&
            moment(e.dateSelected).isAfter(moment())
        )
      } catch (error) {
        console.log("No events data found in local storage.")
      }
    }
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    let dt = moment()

    if (nav !== 0) {
      dt.add(nav, "months")
    }

    const month = dt.month()
    const year = dt.year()

    const firstDayOfMonth = moment({ year: year, month: month, day: 1 })
    const daysInMonth = moment(firstDayOfMonth).endOf("month").date()
    const dateString = firstDayOfMonth.format("dddd, MMMM DD YYYY")

    setDateDisplay(dt.format("MMMM YYYY"))
    const paddingDays = weekdays.indexOf(dateString.split(", ")[0])

    const daysArr = []

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = moment({
        year: year,
        month: month,
        day: i - paddingDays,
      }).format("LL")

      const eventC = eventForDate(dayString)

      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          event: eventForDate(dayString),
          eventColor: eventC ? eventC.selectedColor : "",
          isCurrentDay:
            moment().isSame(
              moment({ year: year, month: month, day: i - paddingDays }),
              "day"
            ) && nav === 0,
          availableDays:
            moment(dayString).isAfter(moment()) && !eventForDate(dayString),
          date: dayString,
        })
      } else {
        const prevMonth = moment(firstDayOfMonth).subtract(1, "months")
        const lastDayOfPrevMonth = prevMonth.endOf("month").date()
        const dayOfPrevMonth = lastDayOfPrevMonth - (paddingDays - i)

        daysArr.push({
          value: dayOfPrevMonth,
          event: null,
          isCurrentDay: false,
          availableDays: false,
          date: "",
        })
      }
    }

    setDays(daysArr)
  }, [events, nav])

  return {
    days,
    dateDisplay,
  }
}

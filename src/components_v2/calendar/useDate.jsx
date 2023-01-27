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
      // You can also return a default value or throw an error here.
    }
  }
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]
    let dt = moment()

    if (nav !== 0) {
      dt.add(nav, "months")
    }

    const month = dt.month()
    const year = dt.year()

    const firstDayOfMonth = moment({ year: year, month: month, day: 1 })
    const daysInMonth = moment(firstDayOfMonth).endOf("month").date()
    const dateString = firstDayOfMonth.format("dddd, MMMM DD YYYY")

    // const groupedEvents = events.reduce((acc, event) => {
    //   const day = moment(event.eventDate).format("YYYY-MM-DD")
    //   if (!acc[day]) {
    //     acc[day] = []
    //   }
    //   acc[day].push(event)
    //   return acc
    // }, {})

    setDateDisplay(dt.format("MMMM YYYY"))
    const paddingDays = weekdays.indexOf(dateString.split(", ")[0])

    const daysArr = []

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = moment({
        year: year,
        month: month,
        day: i - paddingDays,
      }).format("LL")

      // const dayEvents =
      //   groupedEvents[
      //     moment({
      //       year: year,
      //       month: month,
      //       day: i - paddingDays,
      //     }).format("YYYY-MM-DD")
      //   ] || []
      // const numEvents = dayEvents.length

      const eventC = eventForDate(dayString);

      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          event: eventForDate(dayString),
          eventColor: eventC ? eventC.selectedColor : "",
          // eventNum: numEvents,
          isCurrentDay:
            moment().isSame(
              moment({ year: year, month: month, day: i - paddingDays }),
              "day"
            ) && nav === 0,
          availableDays: moment(dayString).isAfter(moment()),
          date: dayString,
        })
      } else {
        daysArr.push({
          value: "padding",
          event: null,
          // eventNum: "",
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

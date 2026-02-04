import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import EventWithPopover from "../../components/CalendarComponents/EventWithPopover.tsx";
import CustomToolbar from "../../components/CalendarComponents/CalendarToolbar.tsx";
import { JSX } from "react";
import { eventPropGetter, formats } from "./format.ts";
import { useQueryClient } from "@tanstack/react-query";
import {
  QUERY_KEY,
  QUERY_KEY_DOCTORS,
} from "@pages/Calendar/entities/constants.ts";
import "dayjs/locale/ru";
dayjs.locale("ru");
const localizer = dayjsLocalizer(dayjs);

const MyResourceCalendar = ({
  currentDate,
  debounceSearch,
  setCurrentDate,
}): JSX.Element => {
  const queryClient = useQueryClient();
  const resources = queryClient.getQueryData([QUERY_KEY_DOCTORS]);
  const events = queryClient.getQueryData([
    QUERY_KEY,
    currentDate,
    debounceSearch,
  ]);
  return (
    <Calendar
      localizer={localizer}
      events={events}
      date={currentDate}
      onNavigate={(newDate) => setCurrentDate(newDate)}
      formats={formats}
      resources={resources}
      resourceIdAccessor="resourceId"
      resourceTitleAccessor="resourceTitle"
      defaultView="day"
      views={["day"]}
      startAccessor="start"
      endAccessor="end"
      step={15}
      timeslots={4}
      eventPropGetter={eventPropGetter}
      min={new Date(0, 0, 0, 8, 0, 0)} // Начало дня (08:00)
      max={new Date(0, 0, 0, 20, 0, 0)} // Конец дня (20:00)
      components={{
        event: EventWithPopover,
        toolbar: CustomToolbar,
      }}
    />
  ) as JSX.Element;
};

export default MyResourceCalendar;

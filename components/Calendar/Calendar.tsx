import { Button } from '@/components/Button';
import { CalendarEvent } from '@/components/Calendar/CalendarEvent';
import { CALENDAR_COLUMN_DATE_FORMAT, CALENDAR_TITLE_FORMAT } from '@/components/Calendar/utils';
import { ButtonSelect } from '@/components/Select';
import { useWindowWidth } from '@react-hook/window-size';
import classNames from 'classnames';
import addDays from 'date-fns/addDays';
import format from 'date-fns/format';
import getTime from 'date-fns/getTime';
import isSameDay from 'date-fns/isSameDay';
import isSunday from 'date-fns/isSunday';
import previousSunday from 'date-fns/previousSunday';
import subDays from 'date-fns/subDays';
import { useEffect, useMemo, useState } from "react";

const CALENDAR_RANGE = {
  "WEEK": { value: 7, label: 'Week', desktopOnly: true },
  "1_DAY": { value: 1, label: '1 days', desktopOnly: false },
  "2_DAY": { value: 2, label: '2 days', desktopOnly: false },
  "3_DAY": { value: 3, label: '3 days', desktopOnly: false },
  "4_DAY": { value: 4, label: '4 days', desktopOnly: true },
  "5_DAY": { value: 5, label: '5 days', desktopOnly: true },
  "6_DAY": { value: 6, label: '6 days', desktopOnly: true },
  "8_DAY": { value: 8, label: '8 days', desktopOnly: true },
  "9_DAY": { value: 9, label: '9 days', desktopOnly: true },
}

export function Calendar() {
  const width = useWindowWidth()
  const isMobileCalendar = useMemo(() => width <= 1028, [width])
  const selectItems = useMemo(() => Object.values(CALENDAR_RANGE).filter((range) => isMobileCalendar ? !range.desktopOnly : true), [isMobileCalendar])

  const [calendarRange, setCalendarRange] = useState(CALENDAR_RANGE["WEEK"]);
  const [activeDate, setActiveDate] = useState(getTime(new Date()));

  useEffect(() => {
    if (isMobileCalendar && calendarRange.value > 3) setCalendarRange(CALENDAR_RANGE["3_DAY"])
  }, [width])

  return (
    <div className="w-full h-full bg-white rounded-3xl drop-shadow-24dp p-4 sm:p-8 space-y-4 flex flex-col">
      <section className="flex flex-col sm:flex-row sm:justify-between gap-y-1 sm:gap-y-0">
        <h3 className="headline">{format(activeDate, CALENDAR_TITLE_FORMAT)}</h3>

        <div className="flex space-x-2">
          <ButtonSelect position={isMobileCalendar ? 'left' : 'right'} items={selectItems.map((range) => ({
            children: range.label,
            active: calendarRange.value === range.value,
            onClick: () => setCalendarRange(range)
          }))}>
            {calendarRange.label}
          </ButtonSelect>

          <Button variant="secondary" size="sm" onClick={focusCurrentDate}>Today</Button>

          <div className="flex space-x-1">
            <Button variant="secondary" size="sm" iconLeft="arrowLeft" onClick={handleRangePrev} />
            <Button variant="secondary" size="sm" iconLeft="arrowRight" onClick={handleRangeNext} />
          </div>
        </div>
      </section>

      <section className="flex flex-1 divide-x-2 divide-gray-11">
        {
          calendarRange.value === 7
            ? <WeekColumns activeDate={activeDate} />
            : <NColumns activeDate={activeDate} daysInRange={calendarRange.value} />
        }
      </section>
    </div>
  )

  function handleRangePrev() {
    setActiveDate(getTime(subDays(activeDate, calendarRange.value)))
  }

  function handleRangeNext() {
    setActiveDate(getTime(addDays(activeDate, calendarRange.value)))
  }

  function focusCurrentDate() {
    setActiveDate(getTime(new Date()))
  }
}

interface CalendarColumnProps {
  date: number;
}

function CalendarColumn({ date }: CalendarColumnProps) {
  const isCurrentDate = useMemo(() => {
    return isSameDay(date, new Date());
  }, [date])

  return (
    <div className="flex-1 flex flex-col items-center h-full space-y-3 px-2">
      <h4 className={classNames("text-center px-2", isCurrentDate ? "text-blue-3 bg-blue-11 rounded-xl" : "")}>{format(date, CALENDAR_COLUMN_DATE_FORMAT)}</h4>

      <div className="flex-1 space-y-2 w-full">
        <CalendarEvent color="blue">Sint laborum ad.</CalendarEvent>
        <CalendarEvent color="green">Sint laborum ad.</CalendarEvent>
        <CalendarEvent color="pink">Sint laborum ad.</CalendarEvent>
      </div>
    </div>
  )
}

interface WeekColumnsProps {
  activeDate: number;
}

function WeekColumns({ activeDate }: WeekColumnsProps) {
  const weekDayStart = isSunday(activeDate) ? activeDate : getTime(previousSunday(activeDate))

  return (
    <>
      <CalendarColumn date={weekDayStart} />
      <CalendarColumn date={getTime(addDays(weekDayStart, 1))} />
      <CalendarColumn date={getTime(addDays(weekDayStart, 2))} />
      <CalendarColumn date={getTime(addDays(weekDayStart, 3))} />
      <CalendarColumn date={getTime(addDays(weekDayStart, 4))} />
      <CalendarColumn date={getTime(addDays(weekDayStart, 5))} />
      <CalendarColumn date={getTime(addDays(weekDayStart, 6))} />
    </>
  )
}

interface NColumnsProps extends WeekColumnsProps {
  daysInRange: number;
}

function NColumns({ activeDate, daysInRange }: NColumnsProps) {
  return (
    <>
      <CalendarColumn date={activeDate} />
      {Array.from(Array(daysInRange - 1)).map((_, ind) => (
        <CalendarColumn date={getTime(addDays(activeDate, ind + 1))} />
      ))}
    </>
  )
}

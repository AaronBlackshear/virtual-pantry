import { Button } from "@/components/Button";
import { Input, InputProps } from "@/components/Input";
import { DATE_PICKER_MONTH_FORMAT, DATE_PICKER_YEAR_FORMAT } from "@/lib/date_formats";
import classNames from "classnames";
import format from "date-fns/format";
import isSameMonth from "date-fns/isSameMonth";
import isToday from "date-fns/isToday";
import { useState } from "react";
import ReactDatePicker, { CalendarContainer } from "react-datepicker";

interface Props extends Omit<InputProps, "iconLeft" | "type"> {
  initialDate?: Date;
}

export function DatePicker({ initialDate, ...props }: Props) {
  const [startDate, setStartDate] = useState<Date | null>(initialDate || new Date());
  const [activeDate, setActiveDate] = useState<Date | null>(null);

  return (
    <ReactDatePicker
      disabled={props.disabled}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<Input {...props} iconLeft="calendar" />}
      calendarContainer={CustomContainer}
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => {
        setActiveDate(date)
        return (
          <div className="flex justify-between items-center pb-4 mb-4 border-b-2 border-gray-11 border-dotted">
            <Button variant="secondary" size="sm" iconLeft="chevronUp" disabled={prevMonthButtonDisabled} onClick={decreaseMonth} />
            <p className="text-headline space-x-1">
              <span className="text-gray-2">{format(date, DATE_PICKER_MONTH_FORMAT)}</span>
              <span className="text-gray-9">{format(date, DATE_PICKER_YEAR_FORMAT)}</span>
            </p>
            <Button variant="secondary" size="sm" iconLeft="chevronDown" disabled={nextMonthButtonDisabled} onClick={increaseMonth} />
          </div>
        )
      }}
      dayClassName={() => "custom-day"}
      renderDayContents={(day, date) => {
        if (!date) return;

        return (
          <div className={classNames(
            "text-button-md w-10 h-10 p-0 m-0.5 inline-flex justify-center items-center rounded-lg",
            !isSameMonth(date, activeDate || new Date()) && "text-gray-9",
            isToday(date) ? "ring-1 ring-blue-3 ring-inset text-blue-3" : "text-gray-3",
          )}>
            {day}
          </div>
        )
      }}
    />
  )
}

interface CalendarContainerProps {
  children: React.ReactNode;
}

function CustomContainer({ children }: CalendarContainerProps) {
  return (
    <div id="custom-calendar" className="mt-2 p-8 rounded-3xl drop-shadow-24dp overflow-hidden bg-white">
      <CalendarContainer>
        {children}
      </CalendarContainer>
    </div>
  )
}

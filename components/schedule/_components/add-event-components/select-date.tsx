"use client";

import { EventFormData } from "@/types";
import { parseDate, CalendarDate, Time } from "@internationalized/date";
import { DateRangePicker } from "@nextui-org/date-picker";
import { TimeInput } from "@nextui-org/date-input";

import React, { useEffect, useState } from "react";
import { UseFormSetValue } from "react-hook-form";

function getFormattedDate(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")}`;
}

// Convert CalendarDate to JavaScript Date
function calendarDateToJSDate(calendarDate: CalendarDate): Date {
  const { year, month, day } = calendarDate;
  return new Date(year, month - 1, day); // JS Date uses 0-indexed months
}

export default function SelectDate({
  data,
  setValue,
}: {
  data?: { startDate: Date; endDate: Date; time: Time };
  setValue: UseFormSetValue<EventFormData>;
}) {
  const [dateState, setDateState] = useState({
    startDate: data
      ? parseDate(getFormattedDate(data?.startDate))
      : parseDate("2024-04-06"),
    endDate: data
      ? parseDate(getFormattedDate(data?.endDate))
      : parseDate("2024-04-10"),

    startTime: new Time(
      data?.startDate?.getHours() || 0,
      data?.startDate?.getMinutes() || 0
    ),
    endTime: new Time(
      data?.endDate?.getHours() || 0,
      data?.endDate?.getMinutes() || 0
    ),
  });

  useEffect(() => {
    if (!dateState) return;

    const jsStartDate = calendarDateToJSDate(dateState.startDate);
    const jsEndDate = calendarDateToJSDate(dateState.endDate);

    // add the time to the date
    jsStartDate.setHours(dateState?.startTime?.hour || 0);
    jsStartDate.setMinutes(dateState?.startTime?.minute || 0);

    jsEndDate.setHours(dateState?.endTime?.hour || 0);
    jsEndDate.setMinutes(dateState?.endTime?.minute || 0);

    // check if the end date is before the start date
    if (jsEndDate < jsStartDate) {
      jsEndDate.setHours(jsStartDate.getHours() + 1);
    }

    setValue("startDate", jsStartDate);
    setValue("endDate", jsEndDate);
  }, [dateState, setValue]);

  return (
    <div>
      <div className="w-full flex gap-4 max-w-full flex-wrap">
        <DateRangePicker
          label="Stay duration"
          isRequired
          value={{ start: dateState.startDate, end: dateState.endDate }}
          className="w-full"
          onChange={(value) => {
            const start = value?.start;
            const end = value?.end;

            const startDate = new Date(
              start?.year || 0,
              (start?.month || 1) - 1,
              start?.day || 1
            );

            const endDate = new Date(
              end?.year || 0,
              (end?.month || 1) - 1,
              end?.day || 1
            );

            setDateState({
              ...dateState,
              startDate: parseDate(getFormattedDate(startDate)),
              endDate: parseDate(getFormattedDate(endDate)),
            });
          }}
        />

        <div className="flex flex-wrap gap-4">
          <TimeInput
            label="Start Time"
            defaultValue={dateState?.startTime}
            onChange={(e: Time) => {
              setDateState({
                ...dateState,
                startTime: e,
              });
            }}
          />

          <TimeInput
            label="End Time"
            defaultValue={dateState?.endTime}
            onChange={(e: Time) => {
              setDateState({
                ...dateState,
                endTime: e,
              });
            }}
            isInvalid={
              dateState?.startTime &&
              dateState?.endTime &&
              dateState.endTime.hour * 60 + dateState.endTime.minute <=
                dateState.startTime.hour * 60 + dateState.startTime.minute
            }
          />
        </div>
      </div>
    </div>
  );
}

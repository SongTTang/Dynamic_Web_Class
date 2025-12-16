import React, { useState } from "react";
import CalendarGrid from "./CalendarGrid";
import { months, weekdays, years } from "../../utils/dateUtils";
import Button from "../Button";

const CalendarContainer = () => {
  const today = new Date();

  // stores the currently displayed year and month in state
  const [date, setDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth(), // 0-11
  });

  // prev month
  const prevMonth = () => {
    setDate(({ year, month }) => {
      if (month === 0) {
        return { year: year - 1, month: 11 };
      }
      return { year, month: month - 1 };
    });
  };

  // next month
  const nextMonth = () => {
    setDate(({ year, month }) => {
      if (month === 11) {
        return { year: year + 1, month: 0 };
      }
      return { year, month: month + 1 };
    });
  };

  // year change
  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value, 10);
    setDate((old) => ({
      ...old,
      year: newYear,
    }));
  };

  // month change
  const handleMonthChange = (e) => {
    const newMonth = parseInt(e.target.value, 10);
    setDate((old) => ({
      ...old,
      month: newMonth,
    }));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* top */}
      <div className="flex items-center justify-center gap-4">
        <select
          className="border px-3 py-1 rounded"
          value={date.year}
          onChange={handleYearChange}
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>

        <select
          className="border px-3 py-1 rounded"
          value={date.month}
          onChange={handleMonthChange}
        >
          {months.map((m, index) => (
            <option key={m} value={index}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-7 text-center text-sm font-semibold">
        {weekdays.map((weekday) => (
          <div key={weekday} className="p-2">
            {weekday}
          </div>
        ))}
      </div>

      {/* calendar grid */}
      <CalendarGrid year={date.year} month={date.month} />

      <div className="flex justify-between mt-2">
        <Button outline onClick={prevMonth}>
          ← Previous
        </Button>

        <Button outline onClick={nextMonth}>
          Next →
        </Button>
      </div>
    </div>
  );
};

export default CalendarContainer;

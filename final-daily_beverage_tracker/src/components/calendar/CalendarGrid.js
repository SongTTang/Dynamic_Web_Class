import React from "react";
import { useSelector } from "react-redux";
import { getMonthGrid, formatDate } from "../../utils/dateUtils";
import LoggingDot from "../logging/LoggingDot";
import { DRINK_COLORS } from "../../utils/colorUtils";

const today = new Date();
const todayY = today.getFullYear();
const todayM = today.getMonth();
const todayD = today.getDate();

const CalendarGrid = ({ year, month }) => {
  const days = getMonthGrid(year, month);

  const drinks = useSelector((state) => state.drinks);
  const filters = useSelector((state) => state.filters);

  let filtered = drinks.slice();

  if (filters.start) {
    filtered = filtered.filter((d) => d.date >= filters.start);
  }
  if (filters.end) {
    filtered = filtered.filter((d) => d.date <= filters.end);
  }

  // filter by type
  if (filters.types.length > 0) {
    filtered = filtered.filter((d) => filters.types.includes(d.type));
  }

  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((item, index) => {
        const cellDate = formatDate(year, month, item.day);

        const drinksForThisDay = filtered.filter((d) => d.date === cellDate);

        const colors = [
          ...new Set(
            drinksForThisDay.map(
              (d) => DRINK_COLORS[d.type] || DRINK_COLORS.Custom
            )
          ),
        ];

        return (
          <div
            key={index}
            className={`relative border h-20 p-1 text-sm text-left ${item.currentMonth ? "bg-white" : "bg-black/5 text-gray-400"
              }`}
          >


            <div className="relative w-6 h-6 flex items-center justify-center">
              {/* date */}
              <div className="relative z-20">
                {item.day}
              </div>

              {/* highlight current date */}
              {item.currentMonth &&
                item.day === todayD &&
                year === todayY &&
                month === todayM && (
                  <div className="absolute bottom-0 w-6 h-6 bg-lime-200 rounded-full z-10" />
                )
              }
            </div>


            {colors.length > 0 && (
              <LoggingDot
                colors={colors}
                count={colors.length}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarGrid;

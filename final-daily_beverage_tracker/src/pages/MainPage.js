import React from "react";
import Header from "../components/layout/Header";
import CalendarContainer from "../components/calendar/CalendarCountainer";
import LoggingPanel from "../components/logging/LoggingPanel";
import DrinkList from "../components/logging/DrinkList";
import FilterSection from "../components/filters/FilterSection";

const MainPage = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] bg-bg text-text">

      <Header title="Daily Beverage Tracker" />

      {/* 3 Columns */}
      <div className="grid grid-cols-5 gap-4 p-4 h-full">
        <div className="border p-4 border-border bg-bg2">
          <div className="font-semibold">Filters</div>
          <div className="bg-bg2">
            <FilterSection />
          </div>
        </div>

        <div className="border p-4 col-span-3 border-border bg-bg2">
          <div className="font-semibold">Calendar</div>
          <div className="border p-4 border-border bg-bg2">
            <CalendarContainer />
          </div>
        </div>

        <div className="border p-4 border-border bg-bg2">
          <div className="font-semibold">Log Drink</div>
          <LoggingPanel />
          <DrinkList />
        </div>
      </div>
    </div>
  )
}

export default MainPage
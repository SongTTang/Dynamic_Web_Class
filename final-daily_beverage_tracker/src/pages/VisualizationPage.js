import React from "react";
import Header from "../components/layout/Header";
import PieTypeChart from "../components/visualization/PieTypeChart";
import BarTypesChart from "../components/visualization/BarTypesChart";
import LineDailyChart from "../components/visualization/LineDailyChart";
import MonthlyFavorite from "../components/visualization/MonthlyFavorite";
import MonthlyTotal from "../components/visualization/MonthlyTotal";

const VisualizationPage = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] bg-bg text-text">

      <Header title="Visualization Dashboard" />

      <div className="grid grid-cols-4 gap-4 p-4 h-full">

        <div className="border border-border p-4 bg-card rounded flex items-center justify-center text-center">
          <MonthlyFavorite />
        </div>

        <div className="border border-border bg-card p-4 col-span-2 rounded">
          <PieTypeChart />
        </div>

        <div className="border border-border p-4 bg-card rounded flex items-center justify-center text-center">
          <MonthlyTotal />
        </div>

        <div className="border border-border bg-card p-4 col-span-2 rounded">
          <BarTypesChart />
        </div>

        <div className="border border-border bg-card p-4 col-span-2 rounded">
          <LineDailyChart />
        </div>


      </div>
    </div>
  );
};


export default VisualizationPage

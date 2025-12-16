import React from "react";
import { useSelector } from "react-redux";

const MonthlyTotal = () => {
  const drinks = useSelector((state) => state.drinks);

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  const drinksThisMonth = drinks.filter((d) => {
    const date = new Date(d.date);
    return (
      date.getFullYear() === currentYear &&
      date.getMonth() === currentMonth
    );
  });

  const total = drinksThisMonth.length;

  return (
    <div className="">
      <p className="text-lg">
        You drank <strong>{total}</strong> beverages this month.  
        Try to drink more water next month! 💧
      </p>
    </div>
  );
};

export default MonthlyTotal;

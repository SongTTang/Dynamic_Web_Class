import React from "react";
import { useSelector } from "react-redux";

const MonthlyFavorite = () => {
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

  const countMap = {};
  drinksThisMonth.forEach((d) => {
    countMap[d.type] = (countMap[d.type] || 0) + 1;
  });

  let favoriteDrink = null;
  let favoriteCount = 0;

  for (const type in countMap) {
    if (countMap[type] > favoriteCount) {
      favoriteDrink = type;
      favoriteCount = countMap[type];
    }
  }

  return (
    <div className="">
      {favoriteDrink ? (
        <p className="text-lg">
          This month, your favorite drink is{" "}
          <strong>{favoriteDrink}</strong> — you had it{" "}
          <strong>{favoriteCount}</strong> times!
        </p>
      ) : (
        <p className="text-lg">No drinks recorded this month.</p>
      )}
    </div>
  );
};

export default MonthlyFavorite

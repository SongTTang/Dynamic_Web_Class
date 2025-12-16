import React from "react";
import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DRINK_COLORS } from "../../utils/colorUtils";

const PieSugarChart = () => {
  const drinks = useSelector((state) => state.drinks);

  const monthStr = new Date().toISOString().slice(0, 7);
  const monthDrinks = drinks.filter(
    (d) => d.date && d.date.startsWith(monthStr)
  );

  // { Coffee: 3, MilkTea: 5, ... }
  const countsByType = monthDrinks.reduce((acc, d) => {
    if (!d.type) return acc;
    acc[d.type] = (acc[d.type] || 0) + 1;
    return acc;
  }, {});

  //    [{ name: "Coffee", value: 3 }, ...]
  const data = Object.entries(countsByType).map(([type, count]) => ({
    name: type,
    value: count,
  }));

  const total = monthDrinks.length;

  // "MilkTea" → "Milk Tea"
  const prettyName = (t) => t.replace(/([A-Z])/g, " $1").trim();

  return (
  <div className="w-full h-80 grid grid-cols-2 gap-4 items-center">
    
    {/* LEFT: Pie Chart */}
    <div className="flex justify-center items-center h-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
          >
            {data.map((entry) => (
              <Cell
                key={entry.name}
                fill={DRINK_COLORS[entry.name] || DRINK_COLORS.Custom}
              />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value, name) => [`${value} times`, prettyName(name)]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>

    {/* RIGHT: Text Summary */}
    <div className="flex flex-col justify-center text-sm space-y-2 overflow-hidden">
      {data.map((item) => (
        <div key={item.name} className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{
              backgroundColor:
                DRINK_COLORS[item.name] || DRINK_COLORS.Custom,
            }}
          ></span>

          <span className="truncate">
            {prettyName(item.name)} — {item.value} times
            {total > 0 &&
              ` (${((item.value / total) * 100).toFixed(1)}%)`}
          </span>
        </div>
      ))}

      {total === 0 && (
        <div className="text-xs text-gray-400">
          No drinks logged this month ☕
        </div>
      )}
    </div>

  </div>
);

};

export default PieSugarChart;

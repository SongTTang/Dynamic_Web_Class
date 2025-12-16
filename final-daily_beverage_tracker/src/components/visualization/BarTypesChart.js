import React from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { DRINK_COLORS } from "../../utils/colorUtils";

const BarTypesChart = () => {
  const drinks = useSelector((state) => state.drinks);

  // count drinks by type
  const data = Object.entries(
    drinks.reduce((acc, d) => {
      acc[d.type] = (acc[d.type] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, count]) => ({ name, count }));

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={data}
          margin={{ top: 20, right: 30, bottom: 20, left: 10 }}
        >
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />

          <XAxis
            dataKey="name"
            padding={{ left: 10, right: 10 }}
            tick={{ fontSize: 12 }}
          />

          <YAxis tick={{ fontSize: 12 }} allowDecimals={false} />

          <Tooltip
            contentStyle={{
              background: "white",
              borderRadius: "8px",
              border: "1px solid #ddd",
            }}
          />

          <Bar dataKey="count" barSize={30} radius={[6, 6, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={DRINK_COLORS[entry.name] || DRINK_COLORS.Custom}
              />
            ))}
          </Bar>

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarTypesChart;

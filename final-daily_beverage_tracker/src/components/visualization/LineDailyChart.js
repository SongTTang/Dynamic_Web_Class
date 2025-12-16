import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const LineDailyChart = () => {
  const drinks = useSelector((state) => state.drinks);

  const countByDate = {};

  drinks.forEach((d) => {
    countByDate[d.date] = (countByDate[d.date] || 0) + 1;
  });

  const data = Object.keys(countByDate).map((date) => ({
    date,
    count: countByDate[date],
  }));

  data.sort((a, b) => (a.date > b.date ? 1 : -1));

  return (
    <div className="border p-4 rounded">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#10B981" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineDailyChart;

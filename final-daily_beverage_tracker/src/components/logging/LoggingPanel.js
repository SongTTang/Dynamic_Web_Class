import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDrink } from "../../store/drinkSlice";
import DRINK_TYPES from "../../constants/drinks";
import { formatDate } from "../../utils/dateUtils";
import Button from "../Button";

const SUGAR_LEVELS = ["0%", "30%", "50%", "70%", "100%"];
const ICE_LEVELS = ["Ice", "No Ice", "Hot"];

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();

const LoggingPanel = () => {
  const dispatch = useDispatch();

  const [type, setType] = useState("");
  const [sugar, setSugar] = useState("");
  const [ice, setIce] = useState("");
  const [date, setDate] = useState(formatDate(year, month, day));


  const handleLog = () => {
    if (!type) return;

    dispatch(
      addDrink({
        type,
        sugar,
        ice,
        date,
      })
    );

    // Clear state after logging
    setType("");
    setSugar("");
    setIce("");
  };

  const drinks = useSelector((state) => state.drinks);
  console.log("Drinks state:", drinks);

  return (
    <div className="p-4 border border-border rounded flex flex-col gap-6 max-w-md">

      {/* Drink Type */}
      <div>
        <div className="font-semibold text-sm mb-1">Drink Type</div>
        <select
          className="border p-2 rounded w-full"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select drink...</option>

          {DRINK_TYPES.map((t) => (
            <option key={t} value={t}>
              {t.replace(/([A-Z])/g, " $1").trim()}
            </option>
          ))}
        </select>

      </div>

      <div>
        <div className="font-semibold text-sm mb-1">Date</div>
        <input
          type="date"
          className="border p-2 rounded w-full"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Sugar Level */}
      <div>
        <div className="font-semibold text-sm mb-2">Sugar Level</div>

        {/* Slider Track */}
        <div className="relative w-full h-2 bg-black/5 rounded-full">
          <div
            className="absolute h-2 bg-pink-300 rounded-full transition-all duration-300"
            style={{
              width: `${sugar
                ? (SUGAR_LEVELS.indexOf(sugar) /
                  (SUGAR_LEVELS.length - 1)) *
                100
                : 0
                }%`,
            }}
          ></div>
        </div>

        {/* Slider Nodes */}
        <div className="relative flex justify-between mt-3">
          {SUGAR_LEVELS.map((level) => {
            const selected = sugar === level;
            return (
              <div
                key={level}
                onClick={() => setSugar(level)}
                className="flex flex-col items-center cursor-pointer select-none"
              >
                <div
                  className={`
                    w-4 h-4 rounded-full border-2 transition-all duration-150 
                    ${selected
                      ? "bg-pink-500 border-pink-300 scale-125"
                      : "bg-white border-gray-400"
                    }
                  `}
                ></div>
                <span className="text-[10px] mt-1">{level}</span>
              </div>
            );
          })}
        </div>
      </div>


      {/* Ice Level */}
      <div>
        <div className="font-semibold text-sm mb-2">Ice Preference</div>

        <div className="flex gap-4">
          {ICE_LEVELS.map((level) => {
            const selected = ice === level;
            return (
              <button
                key={level}
                onClick={() => setIce(level)}
                className="flex items-center gap-2 cursor-pointer select-none"
                type="button"
              >
                {/* Outer circle */}
                <div
                  className={`
                    w-4 h-4 rounded-full border-2 flex items-center justify-center
                    ${selected
                      ? "border-green-700"
                      : "border-gray-400"
                    }
                  `}
                >
                  {/* Selected inner dot */}
                  {selected && (
                    <div
                      className="w-2 h-2 rounded-full bg-green-700"
                    ></div>
                  )}
                </div>

                <span className="text-xs">{level}</span>
              </button>
            );
          })}
        </div>
      </div>


      {/* Log Button */}
      <Button
        primary
        className={type ? "" : "opacity-50 cursor-not-allowed"}
        onClick={handleLog}
        disabled={!type}
      >
        Log Drink
      </Button>

    </div>
  );
};

export default LoggingPanel

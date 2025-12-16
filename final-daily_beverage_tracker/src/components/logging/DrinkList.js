import { useSelector, useDispatch } from "react-redux";
import { removeDrink } from "../../store/drinkSlice";
import { useState } from "react";
import Button from "../Button";

const ITEMS_PER_PAGE = 3;

const DrinkList = () => {
  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.drinks);
  const filters = useSelector((state) => state.filters);

  let filtered = [...drinks];

  if (filters.start) filtered = filtered.filter((d) => d.date >= filters.start);
  if (filters.end) filtered = filtered.filter((d) => d.date <= filters.end);
  if (filters.types.length > 0)
    filtered = filtered.filter((d) => filters.types.includes(d.type));

  filtered.sort((a, b) => (a.date < b.date ? 1 : -1));

  const [page, setPage] = useState(0);

  const startIndex = page * ITEMS_PER_PAGE;
  const currentPageItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col gap-3 pt-2">

      {currentPageItems.map((d) => (
        <div key={d.id} className="border border-border p-2 rounded flex items-center justify-between">
          <div>
            <div className="font-semibold">{d.type}</div>
            <div className="text-xs text-gray-500">{d.date}</div>
            <div className="text-xs text-gray-500">
              {[d.sugar && `${d.sugar} sugar`, d.ice && d.ice].filter(Boolean).join(" • ")}
            </div>
          </div>

          <Button
            danger
            className="h-8 px-2 py-1 text-xs"
            onClick={() => dispatch(removeDrink(d.id))}
          >
            Delete
          </Button>
        </div>
      ))}

      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-2">

          <Button
            outline
            disabled={page === 0}
            className={`px-2 py-1 text-xs ${
              page === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setPage((p) => p - 1)}
          >
            Prev
          </Button>

          <span className="text-xs text-gray-500">
            Page {page + 1} / {totalPages}
          </span>

          <Button
            outline
            disabled={page === totalPages - 1}
            className={`px-2 py-1 text-xs ${
              page === totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>

        </div>
      )}
    </div>
  );
};

export default DrinkList;

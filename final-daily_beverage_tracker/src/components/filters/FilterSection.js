import { useDispatch, useSelector } from "react-redux";
import { setStart, setEnd, toggleType, clearFilters } from "../../store/filterSlice";
import DRINK_TYPES from "../../constants/drinks";
import Button from "../Button";

const FilterSection = () => {
	const dispatch = useDispatch();

	const { start, end, types } = useSelector((state) => state.filters);

	return (
		<div className="p-4 border border-border rounded flex flex-col gap-6 w-56">

			{/* Date Range */}
			<div>
				<div className="font-semibold mb-2 text-sm">Date Range</div>

				<input
					type="date"
					className="border p-1 rounded w-full mb-2"
					value={start}
					onChange={(e) => dispatch(setStart(e.target.value))}
				/>

				<input
					type="date"
					className="border p-1 rounded w-full"
					value={end}
					onChange={(e) => dispatch(setEnd(e.target.value))}
				/>
			</div>

			{/* Drink Types */}
			<div>
				<div className="font-semibold mb-2 text-sm">Drink Types</div>

				<div className="flex flex-col gap-1">
					{DRINK_TYPES.map((t) => {
						const checked = types.includes(t);

						return (
							<label
								key={t}
								className="flex items-center gap-2 text-sm cursor-pointer"
							>
								<input
									type="checkbox"
									checked={checked}
									onChange={() => dispatch(toggleType(t))}
								/>

								<span>
									{t.replace(/([A-Z])/g, " $1").trim()}
								</span>
							</label>
						);
					})}
				</div>
			</div>

			{/* Reset */}
			<Button
				outline
				className="w-full justify-center"
				onClick={() => dispatch(clearFilters())}
			>
				Clear Filters
			</Button>

		</div>
	);
};

export default FilterSection;

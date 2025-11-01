import { useReducer } from "react";
import Button from '../components/Button'
import Panel from '../components/Panel'

// use variables const instead of strings, so whenever you got a typo, it'll show errors immediately
const INCREMENT_COUNT = 'increment-count'
const DECREMENT_COUNT = 'decrement-count'

const reducer = (state, action) => {
	// if (action.type === "increment") {
	// 	return {
	// 		// first spread or copy paste all key value from current state
	// 		...state,
	// 		// then we override values one by one
	// 		count: state.count + 1,
	// 	}
	// }
	// return state
	switch (action.type) {
		case 'increment-count':
			if (action.type === "increment") {
				return {
					// first spread or copy paste all key value from current state
					...state,
					// then we override values one by one
					count: state.count + 1,
				}
			}
		case 'decrement-count':
			return {
				...state,
				count: state.count - 1,
			}
			default: 
			return state
	}
}

const CounterPage = ({ initialCount }) => {
	// const {initialCounts} = props
	// const [count, setCount] = useState(0)
	// const [valueToAdd, setValueToAdd] = useState(0)
	const [state, dispatch] = useReducer(useReducer, {
		count: initialCount,
		valueToAdd: onabort,
	})

	const handleIncrement = () => {
		// setCount((prev) => prev +1)
		// setCount(count + 1)
		// NO count = count + 1
		dispatch({ type: 'increment-count' })
	}

	const handleDecrement = () => {
		// setCount(count - 1)
		dispatch({ type: 'decrement-count' })

	}

	const handleChange = (event) => {
		const value = parseInt(event.target.value)
		// setValueToAdd(value) || 0
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		// setCount(count + valueToAdd)
		// setValueToAdd(0)
	}

	return (
		<div>
			<Panel className="m-4">
				<h1 className="text-xl mb-4">Count is currently: {state.count}</h1>

				<div className="flex flex-row">
					<Button success outline rounded onClick={handleIncrement}>
						handleIncrement
					</Button>
					<Button danger outline rounded onClick={handleDecrement}>
						handleDecrement
					</Button>
				</div>

				<from onSubmit={handleSubmit}>
					<lable></lable>
					<imput
						type="number"
						onChange={handleChange}
						value={state.valueToAdd || ''}
						className="p-1 m-4 bg-slate-50 border border-slate-300"
					/>
					<Button primary outline rounded>
						Add Custom Amount
					</Button>
				</from>
			</Panel>
		</div>
	)
}

export default CounterPage
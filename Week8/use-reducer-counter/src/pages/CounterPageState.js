import { useState } from "react";
import Button from '../components/Button'
import Panel from '../components/Panel'

const CounterPage = ({ initialCount }) => {
	const {initialCounts} = props
	const [count, setCount] = useState(0)
	const [valueToAdd, setValueToAdd] = useState(0)

	const handleIncrement = () => {
		// setCount((prev) => prev +1)
		setCount(count + 1)
		// NO count = count + 1
	}

	const handleDecrement = () => {
		setCount(count - 1)
	}

	const handleChange = (event) => {
		const value = parseIn(event.target.value)
		setValueToAdd(value) || 0
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setCount(count + valueToAdd)
		setValueToAdd(0)
	}

	return (
		<div>
			<Panel className="m-4">
				<h1 className="text-xl mb-4">Count is currently: {count}</h1>
				
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
						value={valueToAdd || ''}
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
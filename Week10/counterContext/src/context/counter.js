import { createContext, useState } from "react";

const CounterContext = createContext()

const Provider = ({children}) => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    const valueToShare = {
        count,
        handleIncrement,
        handleDecrement,
    }

    return <CounterContext.Provider value={{ valueToShare }}>
        {children}
    </CounterContext.Provider >
}

export { Provider }
export default CounterContext
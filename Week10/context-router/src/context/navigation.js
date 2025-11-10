import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext()

const NavigationProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    //add an event listener for when the use hits the back button
    useEffect(() => {
        const handler = () => {
            // placing the current path in state
            setCurrentPath(window.location.pathname)
        }
        // watch for interactions with our routes
        // call our handler and set the curent path in state to whatever was returned from popState
        window.addEventListener('popstate', handler)

        return () => {
            window.addEventListener('popstate', handler)
        }
    }, [])

    // this is how we change a page/route
    const navigate = (to) => {
        // update our state, trigger a rerender
        window.history.pushState({}, '', to)
        setCurrentPath(to)
    }

    return <NavigationContext.Provider value={{currentPath, navigate}}>
        {/* {currentPath} */}
        {children}
    </NavigationContext.Provider>
}

export {NavigationProvider}
export default NavigationContext
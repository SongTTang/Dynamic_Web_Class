import React from 'react'
import cx from 'classnames'
import { twMerge } from 'tailwind-merge'
// props = {
//     children: "whatever text ebtween the open close tags"
//primry: ture,
// }

const Button = (props) => {
    // destructuring our props object
    const { children, primary, secondary, success, warning, danger, rounded, outline, ...otherprops } = props
    // the line above does this bur with less typing
    // const children = prop.children

    const classes = twMerge(cx(
        'flex items-center px-8 py-3 border', 
        otherprops.className, 
        {
            'bg-blue-500 border-blue-500 text-white': primary,
            'bg-gray-900 border-gray-900 text-white': secondary,
            'bg-green-500 border-green-500 text-white': success,
            'bg-orange-400 border-orange-400 text-white': warning,
            'bg-red-600 border-red-600 text-white': danger,
            // rounded
            'rounded-full': rounded,
            // outline
            "bg-white": outline,
            // outline variatio n in text color
            'text-blue-500': outline && primary,
            'text-gray-900': outline && secondary,
            'text-green-500': outline && success,
            'text-orange-400': outline && warning,
            'text-red-600': outline && danger,
        }))


    return <button {...otherprops}className={classes}>{children}</button>
}

export default Button
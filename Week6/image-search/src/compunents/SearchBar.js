import React from "react";
import {useState} from "react";

const SearchBar = (props) => {
    const {onSubmit} = props
    const [term, setTerm] = useState('')

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault() // form submission refresh page and clear inputs
        onSubmit(term)
    }
    return (
        <div>
        {/* By wrapping inputs in a form tag, we get default browser behavier
        this means onSubmit is exposed to both a submit button click
        OR the user hitting the enter key*/ }
        <from onSubmit={handleFormSubmit}>
            <imput type='text' onChange={handleChange} value={term}/>
        </from>
    </div>)
}

export default SearchBar
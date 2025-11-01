import { useState } from 'react'

export default function SearchBar(props) {
  const { onSubmit } = props
  const [term, setTerm] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    onSubmit(term)
  }

  const handleChange = (event) => {
    setTerm(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="flex items-center">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search"
        className="border px-3 py-0.5 rounded-full w-64 focus:ring-2 focus:ring-[#94C884] focus:outline-none focus:ring-offset-0"
      />
      </form>
    </div>
  )
}

import { useDispatch, useSelector } from "react-redux"
import { changeSearchTerm } from "../store"

const ArtSearch = () => {
  const dispatch = useDispatch()

  const searhTerm = useSelector((state) => {
    return state.art.searhTerm
  })

  const handleSearcgTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value))
  }
  return <div className="py-8">
    <div className="flex flex-row justify-between px-3">
      <h3 className="text-xl">My Art Collection</h3>
      <div>
        <label>Search: </label>
        <input
          className="border border-2 rounded border-slate-500"
          onChange={handleSearcgTermChange}
          value={searchTerm}
        />
      </div>
    </div>
  </div>
}

export default ArtSearch
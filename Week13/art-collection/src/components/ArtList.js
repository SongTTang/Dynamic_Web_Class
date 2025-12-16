import { useSelector, useDispatch } from "react-redux"

const ArtList = () => {
  const dispatch = useDispatch()

  const artList = useSelector(({art: {searchTerm, data}}) => {
    // does the name of an art item 
    const filteredArt = data.filter((art) => {
      return art.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  })

  const handleArtDelete = (art) => {
    dispatch(removeArt(art.id))
  }

  const renderedArt = artList.map((art) => {
    return <div key={art.id} className="border rounded dlex flex-row justify-between items-center">
      <p className="">
        {art.name} -- ${art.price}
      </p>
      <button
        onClick={() => handleArtDelete(art)}
        className="rounded bg-red-500 p-2 text-white"
      >
        Delete
      </button>
    </div>
  })
  return <div>ArtList</div>
}

export default ArtList
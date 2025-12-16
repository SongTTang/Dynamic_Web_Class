import { useSelector } from "react-redux"

const ArtValue = () => {
  const totalPrice = useSelector(({ art: { data, searchTerm } }) => {
    return data
      .filter((art) => {
        return art.name.toLowerCase().includes(searchTerm.toLowerCase())
      })
      .reduce((acc, art) => (acc += art.price), 0)
  })
  return <div>ArtValue</div>
}

export default ArtValue
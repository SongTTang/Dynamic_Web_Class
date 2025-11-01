import { useState } from "react";
import SearchBar from "./compunents/SearchBar";
import ImageList from "./compunents/ImageList";
import searchImages from './api'

const App = () => {
  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term)
    console.log(result)
    setImages(result)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  )
}

export default App;

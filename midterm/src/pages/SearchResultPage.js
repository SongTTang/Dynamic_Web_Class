import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import searchImages from "../api";
import { products as localProducts } from "../ProductList";
import ProductCard from "../components/ProductCard";

export default function SearchResultPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;

    setPage(1);
    fetchResults(query, 1, true);
  }, [query]);

  const fetchResults = async (searchTerm, pageNumber, reset = false) => {
    try {
      const localMatches = localProducts.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const apiResults = await searchImages(searchTerm, pageNumber);

      const mappedApiResults = apiResults.map((item) => ({
        id: "api_" + item.id + "_p" + pageNumber,
        name: item.alt_description || searchTerm,
        price: Math.floor(Math.random() * 20) + 5,
        image: item.urls.small,
        description: item.description || "From Unsplash",
        slug: `/api/${item.id}`,
      }));

      if (reset) {
        setResults([...localMatches, ...mappedApiResults]);
      } else {
        setResults((prev) => [...prev, ...mappedApiResults]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="pt-24">
      <div className="grid grid-cols-4 gap-6">
        {results.length === 0 ? (
          <p>No results found.</p>
        ) : (
          results.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))
        )}
      </div>

      {results.length > 0 && (
        <div className="w-full text-center mt-6 mb-24">
          <button
            onClick={() => {
              const nextPage = page + 1;
              setPage(nextPage);
              fetchResults(query, nextPage);
            }}
            className="px-4 py-2 bg-[#3D7E2D] text-white rounded hover:bg-[#205C12]"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

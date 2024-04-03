import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductGallery from "../components/product/Productgallery";
import Navbar from "../components/navbar/Navbar";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState("");
  const [short, setShort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?page=${currentPage}&limit=16"
        );
        // console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [currentPage]);

  function nextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  function prevPage() {
    if (prevPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }
  return (
    <div>
      <Navbar />

      {/* Landing page for Shop  */}
      <div
        className="h-[316px] p-4 flex justify-center items-center flex-col gap-3"
        style={{ backgroundImage: 'url("./assets/Shop.png")' }}
      >
        <h1 className="text-48 font-semibold">Shop</h1>
        <p>
          <span className="font-bold">Home</span> &#10095; <span>Shop</span>
        </p>
      </div>

      {/* Search bar for shop page */}
      <div className="p-4 md:p-8 bg-lightBrown">
        <div className="md:container mx-auto">
          <div className="flex justify-between">
            {/* Filter container */}
            <div className="flex items-center gap-6">
              <div className="flex gap-3 items-center text-20">
                {/* Filter Image */}
                <img
                  src="./assets/system-uicons_filtering.png"
                  alt="Filter Icon"
                />
                <span>Filter</span>
              </div>

              {/* grid and view list */}
              <div className="flex items-center gap-8">
                <img
                  src="./assets/ci_grid-big-round.png"
                  className="hidden md:block"
                  alt="ci_grid"
                />
                <img
                  src="./assets/bi_view-list.png"
                  className="hidden md:block"
                  alt="bi_view"
                />
              </div>

              <div className="w-[2px] h-8 bg-dark"></div>
              <div>Showing 1–16 of 32 results</div>
            </div>

            {/* Search Input  */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <span>Show</span>
                <input
                  type="text"
                  value={show}
                  placeholder="16"
                  className="w-10 text-center p-2"
                  onChange={(ev) => setShow(ev.target.value)}
                />
              </div>
              <div className="flex items-center gap-4">
                <span>Short by</span>
                <input
                  type="text"
                  value={short}
                  placeholder="Default"
                  className="w-36 p-2"
                  onChange={(ev) => Number(setShort(ev.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product */}
      <div className="mt-12">
        <div className="md:container mx-auto mt-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 place-content-center p-4">
            {loading && "Loading..."}
            {products?.map((product) => (
              <ProductGallery key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <button
              className={`px-4 py-2 bg-gray-300 rounded-md ${
                currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-gray-300 rounded-md cursor-pointer"
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

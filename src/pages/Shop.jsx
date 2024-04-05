// Import necessary modules
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductGallery from "../components/product/Productgallery";
import Navbar from "../components/navbar/Navbar";

// Define the Shop component
export default function Shop() {
  // State variables
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState("");
  const [short, setShort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // Fetch products based on current page when component mounts or currentPage changes
  useEffect(() => {
    setLoading(true);

    const fetchProducts = async () => {
      let limit;
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);

        console.log(response.data);

        const newProducts = response.data;
        setTotalPages(Math.ceil(newProducts.length / 10));
        console.log(newProducts);
        // setTotalPages(response.data.totalPages);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products?page=${currentPage}&limit=10`
        );

        console.log(response.data);

        const newProducts = response.data;
        // setTotalPages(newProducts.length / 10)
        console.log(newProducts);
        // setTotalPages(response.data.totalPages);
        // setProducts((prevProducts) => prevProducts);
        // setProducts((prevProducts) => [...prevProducts, ...newProducts]);
        setProducts((prevProducts) => newProducts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    fetchProduct();
  }, [currentPage]);

  // Function to navigate to the next page
  function nextPage() {
    setLoading(true);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      setLoading(false);
    }
  }

  // Function to navigate to the previous page
  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  // Function to navigate to a specific page
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Return JSX
  return (
    <div>
      <Navbar />

      {/* Landing page for Shop */}
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
          <div className="flex space-around gap-3 md:justify-between">
            {/* Filter container */}
            <div className="flex items-center gap-2 md:gap-6">
              <div className="hidden md:flex gap-3 items-center text-20">
                {/* Filter Image */}
                <img
                  src="./assets/system-uicons_filtering.png"
                  alt="Filter Icon"
                />
                <span>Filter</span>
              </div>

              {/* grid and view list */}
              <div className="hidden md:flex items-center gap-8">
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

              <div className="hidden md:block w-[2px] h-8 bg-dark"></div>
              <div
                className="text-12 md:text-16"
                onClick={() => console.log(totalPages)}
              >
                Showing 1–16 of 32 results
              </div>
            </div>

            {/* Search Input */}
            <div className="flex items-center gap-2 md:gap-5">
              <div className="hidden md:flex items-center gap-3">
                <span>Show</span>
                <input
                  type="text"
                  value={show}
                  placeholder="16"
                  className="w-10 text-center p-2"
                  onChange={(ev) => setShow(ev.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <span className="text-12 md:text-16">Short by</span>
                <input
                  type="text"
                  value={short}
                  placeholder="Default"
                  className="w-20 md:w-36 p-1 md:p-2"
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
            <>{!loading && products.length === 0 && <div>Not Found</div>}</>
            <>
              {products.length >= 1 &&
                products.map((product, index) => (
                  <ProductGallery key={product.id} product={product} />
                ))}
            </>
          </div>

          <div className="flex justify-center mt-4">
            <button
              className={`px-4 py-2 mx-2 bg-brown rounded-md ${
                currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((i) => (
              <button
                key={i}
                className={`px-3 py-2 mx-1 rounded-md bg-dark ${
                  currentPage === i
                    ? " bg-brown text-black"
                    : "bg-brown hover:bg-lightBrown"
                }`}
                onClick={() => goToPage(i)}
              >
                {i}
              </button>
            ))}

            <button
              className={`px-4 py-2 mx-2 bg-brown rounded-md ${
                currentPage === totalPages
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

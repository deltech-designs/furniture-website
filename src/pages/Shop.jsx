// Import necessary modules
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductGallery from "../components/product/Productgallery";
import Navbar from "../components/navbar/Navbar";
import { CiWifiOff } from "react-icons/ci";
import { RxReload } from "react-icons/rx";

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
  // useEffect(() => {
  //   setLoading(true);

  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get(`https://fakestoreapi.com/products`);
  //       const newProducts = response.data;
  //       let render = setTotalPages(Math.ceil(newProducts.length / 10));
  //       setProducts(render);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, [currentPage]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const limit = 10; // Number of products to fetch per page
        const offset = (currentPage - 1) * limit; // Calculate the offset based on the current page

        const response = await axios.get(
          `https://fakestoreapi.com/products?limit=${limit}&offset=${offset}`
        );

        const newProducts = response.data;
        setProducts(newProducts.slice(10, 20));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [currentPage]);

  useEffect(() => {
    const fetchProduct = async () => {
      const limit = 10; // Number of products to fetch per page
      const offset = (currentPage - 1) * limit; // Calculate the offset based on the current page
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products?limit=${limit}&offset=${offset}`
        );

        const newProducts = response.data;

        console.log(newProducts);

        // setTotalPages(newProducts.length / 10)
        // setTotalPages(response.data.totalPages);
        // setProducts((prevProducts) => prevProducts);
        // setProducts((prevProducts) => [...prevProducts, ...newProducts]);

        setProducts((prevProducts) => newProducts);
        setCurrentPage();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

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
        <img src="./assets/logo_icon.png" alt="funiro logo icon" />
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
            {!loading && products.length === 0 && (
              <div className="w-max-[500px] mx-auto">
                <div className="flex flex-col items-center justify-center bg-white shadow-lg px-4 py-8 gap-4 rounded-lg w-96">
                  <CiWifiOff size={50} />
                  <h1 className="text-24 font-semibold">Oops! No Internet!</h1>
                  <p className="leading-normal">
                    Looking like you're facing a temporary network interruption.
                    <p>Or check your connection.</p>
                  </p>
                  <div className="rounded-full bg-lightgray w-20 h-20 p-5">
                    <RxReload size={40} />
                  </div>
                </div>
              </div>
            )}
            <>
              {products.length >= 1 &&
                products.map((product, index) => (
                  <>
                    <ProductGallery key={product.id} product={product} />

                    {index === product.length - 1 && (
                      <div className="flex justify-center mt-4">
                        <button
                          className={`px-4 py-2 mx-2 bg-brown rounded-md ${
                            currentPage === 1
                              ? "cursor-not-allowed"
                              : "cursor-pointer"
                          }`}
                          onClick={prevPage}
                          disabled={currentPage === 1}
                        >
                          Previous
                        </button>

                        {Array.from(
                          { length: totalPages },
                          (_, i) => i + 1
                        ).map((i) => (
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
                    )}
                  </>
                ))}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

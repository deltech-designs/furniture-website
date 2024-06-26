import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Range from "../components/Range/Range";
import Navbar from "../components/navbar/Navbar";
import ProductGallery from "../components/product/Productgallery";
import Carousel from "../components/slider/Carousel";
import Footer from "../components/footer/footer";
import { CiWifiOff } from "react-icons/ci";
import { RxReload } from "react-icons/rx";

export default function LandingPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=8"
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
  }, []);
  return (
    <div>
      <Navbar />

      {/* Landing page */}
      <div className="main-container md:height flex justify-between items-center bg-cover bg-no-repeat">
        <div className="md:container mx-auto">
          <div className="flex justify-between items-center gap-36 p-4">
            <div className="hidden md:hidden lg:flex lg:w-full"></div>
            <div className="bg-lightBrown w-full md:w-full lg:w-full h-[443px] m-0 px-5 md:px-10 lg:px-10 flex flex-col justify-center justify-self-end">
              <h6 className="text-16 font-medium tracking-widest">
                New Arrival
              </h6>
              <h1 className="text-[36px] md:text-[52px] text-brown font-bold">
                Discover Our
              </h1>
              <h1 className="text-[36px] md:text-[52px]  text-brown font-bold">
                New Collection
              </h1>
              <p className="text-[12px] md:text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>

              <div className="mt-6 md:mt-12">
                <button className="bg-brown text-white px-12 py-4">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Range />

      <div className="mt-12 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-center text-[40px] font-bold text-black">
            Our Product
          </h1>
          <div className="mt-12 w-full">
            <div className="md:container mx-auto w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {loading && "Loading..."}
                {!loading && products.length === 0 && (
                  <div className="w-max-[500px] mx-auto">
                    <div className="flex flex-col items-center justify-center bg-white shadow-lg px-4 py-8 gap-4 rounded-lg w-96">
                      <CiWifiOff size={50} />
                      <h1 className="text-24 font-semibold">
                        Oops! No Internet!
                      </h1>
                      <p className="leading-normal">
                        Looking like you're facing a temporary network
                        interruption.
                        <p>Or check your connection.</p>
                      </p>
                      <div className="rounded-full bg-lightgray w-20 h-20 p-5">
                        <RxReload size={40} />
                      </div>
                    </div>
                  </div>
                )}
                {products?.map((product) => (
                  <ProductGallery key={product.id} product={product} />
                ))}
                {products.length > 0 && (
                  <div className="col-span-full flex justify-center mt-8">
                    <Link to="/shop">
                      <button className="text-gold font-bold text-16 border-gold border-2 py-4 px-20 hover:bg-gold hover:text-white transition-all duration-500 ease-in-out">
                        Show More
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-12">
        <h1 className="text-center text-[40px] font-bold text-black">
          Our Product
        </h1>

        <div className="md:container mx-auto mt-12 w-full h- text-center flex items-center justify-center">
          <div className="grid grid-cols-3 gap-4 lg:grid-cols-4  p-4 ">
            {loading && "Loading..."}

            {!loading && products.length === 0 && (
              <>
                <div className=" w-max-[500px]  mx-auto">
                  <div className="flex flex-col items-center justify-center bg-white shadow-lg px-4 py-8 gap-4 rounded-lg w-96">
                    <CiWifiOff size={50} />

                    <h1 className="text-24 font-semibold">
                      Oops! No Internet!
                    </h1>
                    <p className="leading-normal">
                      Looking like you facing a temporary network interruption.
                      <p>Or check your check connection.</p>
                    </p>
                    <div className="rounded-full bg-lightgray w-20 h-20 p-5">
                      <RxReload size={40} />
                    </div>
                  </div>
                </div>
              </>
            )}

            {products?.map((product, index) => (
              <>
                <ProductGallery key={product.id} product={product} />

                {index === products.length - 1 && (
                  <div className="flex justify-center items-center">
                    <Link to="/shop">
                      <button className="text-gold font-bold text-[16px] border-gold border-2 py-4 px-20 hover:bg-gold hover:text-white transition-all duration-500 ease-in-out ">
                        Show More
                      </button>
                    </Link>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div> */}

      {/* Beautiful room */}
      <div className="bg-lightBrown w-full">
        <div className="md:container mx-auto">
          <div className="flex flex-col md:flex-col lg:flex-row gap-8 items-center p-6">
            {/*  */}
            <div className="w-full md:w-full lg:w-2/3">
              <h1 className="text-[45px] font-bold">50+ Beautiful rooms</h1>
              <h1 className="text-[45px] font-bold">inspiration</h1>
              <p className="text-[16px] text-lighterGray mt-4 md:w-2/3 w-full">
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>
              <button className="bg-brown py-4 px-8 mt-6 font-medium text-white">
                Explore More
              </button>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-row w-full md:w-full lg:w-4/5  gap-4">
              <div className="hidden md:hidden lg:flex">
                <img
                  src="assets/wallframe.png"
                  className="w-full"
                  alt="Wallframe"
                />
              </div>
              <div className="w-full md:w-full lg:w-1/4">
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      {/* <div className="md:container mx-auto h-1/2">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
          laudantium. Ut facere delectus repellendus quae? Minus blanditiis,
          accusantium illum nulla error vero numquam? Eveniet hic placeat vel
          voluptate veniam eligendi.
        </div>
      </div> */}

      <div>
        <Footer />
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Range from "../components/Range/Range";
import Navbar from "../components/navbar/Navbar";
import ProductGallery from "../components/product/Productgallery";
import Carousel from "../components/slider/Carousel";
import Footer from "../components/footer/footer";

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
          <div className="flex justify-between  items-center gap-36 p-4">
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

      <div>
        {/* Product */}
        <div className="mt-12">
          <h1 className="text-center text-[40px] font-bold text-black">
            Our Product
          </h1>
          <div className="md:container mx-auto mt-12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 place-content-center p-4">
              {loading && "Loading..."}
              {products?.map((product) => (
                <ProductGallery key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center my-8 ">
            <Link to="/shop">
              <button className="text-gold font-bold text-[16px] border-gold border-2 py-4 px-20 hover:bg-gold hover:text-white transition-all duration-500 ease-in-out ">
                Show More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Beautiful room */}
      <div className="bg-lightBrown">
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

import { useEffect, useState } from "react";
import axios from "axios";
import ProductGallery from "../components/product/Productgallery";
import { Link } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=16"
        );
        console.log(response.data);
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
    <>
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
          {/* <div className="flex justify-center items-center my-8 ">
            <Link to="/product">
              <button className="text-gold font-bold text-[16px] border-gold border-2 py-4 px-20 hover:bg-gold hover:text-white transition-all duration-500 ease-in-out ">
                Show More
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
}

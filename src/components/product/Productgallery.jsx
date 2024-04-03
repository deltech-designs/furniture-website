import { CiShare2 } from "react-icons/ci";
import { CgArrowsExchangeAlt, CgLayoutGrid } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";

export default function ProductGallery({ product }) {
  // console.log(typeof product);
  // console.log(product);
  return (
    <div className="bg-white overflow-hidden shadow-lg relative group ">
      <div className="w-full h-[350px]">
        <div className="w-full">
          <img
            className="w-full h-60 object-contain object-center"
            src={product.image}
            alt={product.title}
          />
          <div className="p-4">
            <h2 className="font-bold text-24 md:text-24 lg:text-24 text-dark mb-2 w-68 truncate">
              {product.title}
            </h2>
            {/* <p
              className={`truncate h-20 w-10 text-12 md:text-12 lg:text-16 text-justify `}
            >
              {product.description}
            </p> */}
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-16 md:text-18 lg:text-22 text-dark mt-3">
                {` Price: $${product.price}`}
              </h3>
            </div>
            <h6 className="line-through text-darkGray text-[12px] md:text-[12px] lg:text-[16px] mt-3">
              {/* {Object.keys(product.rating)?.map((key) => (
                <div key={key}>{product[key]}</div>
              ))} */}
            </h6>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div class="absolute bottom-0 left-0 right-0 bg-black opacity-90 overflow-hidden transition-all duration-500 ease-in-out h-0 group-hover:h-full">
        <div class="text-white text-center text-2xl py-4 px-8 whitespace-nowrap transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
          <button className="text-[16px] bg-white text-gold px-6 py-3 rounded-md">
            Add to cart
          </button>

          <div className="flex md:gap-2 lg:gap-6 gap-6 mt-4">
            <span className="flex items-center gap-2">
              <CgArrowsExchangeAlt />
              <span>Compare</span>
            </span>
            <span className="flex items-center gap-2">
              <CiHeart />
              <span>Like</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

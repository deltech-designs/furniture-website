import { useState, useEffect } from "react";
import Slider from "./slider";

export default function Carousel() {
  const [products, setProducts] = useState([]);
  //   const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=3"
        );
        // console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, []);

  const carouselSliders = [
    {
      img: "../assets/Rectangle 25.png",
      desc: "01 - Bed Room",
      title: "Inner Peace",
    },
    {
      img: "../assets/Rectangle 25.png",
      desc: "02 - Bed Room",
      title: "Inner Peace",
    },
    {
      img: "../assets/Rectangle 25.png",
      desc: "03 - Bed Room",
      title: "Inner Peace",
    },
    {
      img: "../assets/Rectangle 25.png",
      desc: "03 - Bed Room",
      title: "Inner Peace",
    },
    {
      img: "../assets/Rectangle 25.png",
      desc: "04 - Bed Room",
      title: "Inner Peace",
    },
    {
      img: "../assets/Rectangle 25.png",
      desc: "05 - Bed Room",
      title: "Inner Peace",
    },
  ];
  return (
    <div>
      <div className="w-full md:w-full lg:w-1/4">
        <Slider sliders={carouselSliders} />
      </div>
    </div>
  );
}

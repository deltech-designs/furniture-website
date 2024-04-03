import ProductRange from "../Range/ProductRange";

export default function Range() {
  const rangeProduct = [
    {
      img: "assets/dining.png",
      desc: "Dining",
    },
    {
      img: "assets/living.png",
      desc: "Living",
    },
    {
      img: "assets/bedroom.png",
      desc: "Bedroom ",
    },
  ];

  return (
    <>
      <div className="md:container mx-auto">
        <div className="md:mt-10 mt-2">
          <div className="text-center p-3">
            <h1 className="text-36   font-bold">Browse The Range</h1>
            <p className="text-gray text-[]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="grid md:grid-cols-3 gap-4 md:gap-7 mt-4 md:mt-10">
              {rangeProduct?.map((item) => (
                <ProductRange key={item.desc} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ProductRange({ id, img, desc }) {
  return (
    <div>
      <div
        key={id}
        className="grid grid-col-3 items-center place-content-center "
      >
        <img
          className="w-full md:w-[900px] lg:w-[500px] rounded-md"
          src={img}
          alt={img.name}
        />
        <div className="text-center">
          <h5 className="font-medium text-16 md:text-18 lg:text-22 p-2">
            {desc}
          </h5>
        </div>
      </div>
    </div>
  );
}

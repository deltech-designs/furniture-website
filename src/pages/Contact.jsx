import Navbar from "../components/navbar/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      {/* Landing page for Contact */}
      <div
        className="h-[316px] p-4 flex justify-center items-center flex-col gap-3"
        style={{ backgroundImage: 'url("./assets/Shop.png")' }}
      >
        <h1 className="text-48 font-semibold">Contact</h1>
        <p>
          <span className="font-bold">Home</span> &#10095; <span>Contact</span>
        </p>
      </div>
    </div>
  );
}

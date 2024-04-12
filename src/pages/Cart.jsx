import { useState } from "react";
import ChooseUS from "../components/chooseUs";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import { CiClock2 } from "react-icons/ci";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <Navbar />

      {/* Landing page for Cart */}
      <div
        className="h-[316px] p-4 flex justify-center items-center flex-col gap-3"
        style={{ backgroundImage: 'url("./assets/Shop.png")' }}
      >
        <img src="./assets/logo_icon.png" alt="funiro logo icon" />
        <h1 className="text-48 font-semibold">Cart</h1>
        <p>
          <span className="font-bold">Home</span> &#10095; <span>Cart</span>
        </p>
      </div>

      {/* Cart  */}
      <div className="md:container mx-auto mb-8">
        <div className="flex flex-col md:flex-row justify-between pt-12">
          <div className="w-[817px]">
            <table className="w-full text-left">
              <thead className="bg-lightBrown w-[817px]">
                <tr className="">
                  <th className="p-3 font-medium"></th>
                  <th className="p-3 font-medium">Product</th>
                  <th className="p-3 font-medium">Price</th>
                  <th className="p-3 font-medium">Quantity</th>
                  <th className="p-3 font-medium">Subtotal</th>
                  <th className="p-3 font-medium"></th>
                  <th className="p-3 font-medium"></th>
                </tr>
              </thead>
              <tbody className="p-14">
                <tr className="text-left">
                  <td className="p-3">
                    <img
                      src="./assets/pingky.png"
                      className="w-16 rounded-lg  object-fill"
                      alt=""
                    />
                  </td>
                  <td className="p-3">
                    <h3>Asgaard sofa</h3>
                    <h3 className="block md:hidden">Rs 250,000.00</h3>
                  </td>
                  <td className="p-3">Rs 250,000.00</td>
                  <td>
                    <input
                      type="text"
                      className="w-10 text-center outline-none border p-1 border-darkGray rounded-md"
                      value={quantity}
                      onChange={(ev) => setQuantity(ev.target.value)}
                    />
                  </td>
                  <td className="p-3">Rs. 250,000.00</td>
                  <td className="p-3">
                    <CiClock2 size={25} />
                  </td>
                </tr>
              </tbody>
            </table>

            {/* <div className="bg-lightBrown flex justify-around p-4 w-[817px] font-semibold">
              <div></div>
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Subtotal</div>
              <div></div>
            </div> */}
          </div>
          <div className="w-[393px] h-[390px] bg-lightBrown p-4 ">
            <h1 className="text-center text-32 font-semibold">Cart Totals</h1>
            <div className="flex flex-col justify-around items-center gap-4">
              <div className="flex gap-8 mt-6 items-center">
                <span className="text-semibold">Subtotal:</span>
                <span className="text-darkBlack">Rs. 250,000.00</span>
              </div>
              <div className="flex gap-6 mt-6 items-center">
                <span className="text-semibold">Total:</span>
                <span className="text-20 text-gold">Rs. 250,000.00</span>
              </div>

              <button className="border px-10 hover:bg-black hover:text-white cursor-pointer transition-all rounded-lg py-3 mt-8">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="md:container mx-auto rounded mb-8">
        <div className="flex flex-col md:flex-row justify-between gap-8 pt-12">
          <table className="w-full text-left">
            <thead className="bg-lightBrown">
              <tr className="">
                <th className="p-3 font-medium"></th>
                <th className="p-3 font-medium">Product</th>
                <th className="p-3 font-medium">Price</th>
                <th className="p-3 font-medium">Quantity</th>
                <th className="p-3 font-medium">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-left">
                <td>
                  <img
                    src="./assets/pingky.png"
                    className="w-16 rounded-lg  object-fill"
                    alt=""
                  />
                </td>
                <td className="p-3">
                  <h3>Asgaard sofa</h3>
                  <h3 className="block md:hidden">Rs 250,000.00</h3>
                </td>
                <td className="p-3">Rs 250,000.00</td>
                <td className="p-3">1</td>
                <td className="p-3">Rs. 250,000.00</td>
              </tr>
            </tbody>
          </table>

          <div className="flex mt-8 justify-end">
            <div className="w-[393px] h-[390px] bg-lightBrown p-4 ">
              <h1 className="text-center text-32 font-semibold">Cart Totals</h1>
              <div className="flex flex-col justify-around items-center gap-4">
                <div className="flex gap-8 mt-6 items-center">
                  <span className="text-semibold">Subtotal:</span>
                  <span className="text-darkBlack">Rs. 250,000.00</span>
                </div>
                <div className="flex gap-6 mt-6 items-center">
                  <span className="text-semibold">Total:</span>
                  <span className="text-20 text-gold">Rs. 250,000.00</span>
                </div>

                <button className="border px-10 rounded-lg py-3 mt-8">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <ChooseUS />
      <Footer />
    </div>
  );
}

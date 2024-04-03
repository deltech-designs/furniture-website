import { useState } from "react";

function Footer() {
  const [isinput, setIsInput] = useState("");

  return (
    <div className="md:container mx-auto p-5">
      <div className="flex flex-col lg:flex-row justify-between my-4 gap-6">
        {/* Company  */}
        <div className="w-72">
          <h5 className="text-[24px] font-bold">Funiro.</h5>
          <p className="mt-5">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* Footer Navigation Link  */}
        <div>
          <h3 className="text-darkBlack font-medium">Links</h3>

          <ul className="mt-6 flex flex-col gap-6 font-medium">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Other Link Options */}
        <div>
          <h3 className="text-darkBlack font-medium">Help</h3>

          <ul className="flex flex-col gap-5 mt-6 font-medium">
            <li>
              <a href="#">Payment Options</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Privacy Policies</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <div>
            <h3 className="text-darkBlack font-medium">Newsletter</h3>
          </div>

          <form className="mt-6 flex md:flex-row flex-col gap-6">
            <input
              type="text"
              className="outline-none border-b-2"
              placeholder="Enter Your Email Address"
              value={isinput}
              onChange={(ev) => setIsInput(ev.target.value)}
            />
            <button className="border-b-2 font-medium w-24 text-left">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <hr className="my-5" />
      <div className=""></div>
      <p className="pt-4">2023 furino. All rights reverved</p>
    </div>
  );
}

export default Footer;

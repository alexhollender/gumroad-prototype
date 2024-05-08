"use client";
import * as GlobalContext from "@/GlobalContext";
import Image from "next/image";
import createStep from "../../public/images/createStep.png";

const CreateStep = () => {
  const { productTitle, setProductTitle, navVersion } =
    GlobalContext.useGlobalContext();

  return (
    <>
      <div className={navVersion !== "b" ? "py-3 px-4" : "pb-3 px-4"}>
        <p className="pb-2">
          Make some selections, fill in some boxes, and go live in minutes.
        </p>
        <p>Our Help Center has everything you need to know</p>
      </div>
      <div className="py-3 px-4">
        <label htmlFor="name" className="block pb-2 font-bold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="block border border-black p-3 rounded w-full"
          placeholder="Name of product"
          data-1p-ignore
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)}
        />
      </div>
      <div className="py-3 px-4">
        <label htmlFor="products" className="block pb-2 font-bold">
          Products
        </label>
        <Image src={createStep} alt="product selection" />
      </div>
    </>
  );
};

export default CreateStep;

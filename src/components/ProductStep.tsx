"use client";
import * as GlobalContext from "@/GlobalContext";
import Image from "next/image";
import productStep from "../../public/images/productStep.png";
import productStepEdit from "../../public/images/productStepEdit.png";

type ProductStepProps = {
  edit?: boolean;
};

const ProductStep: React.FC<ProductStepProps> = ({ edit }) => {
  const { productTitle, setProductTitle } = GlobalContext.useGlobalContext();

  return (
    <>
      <div>
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
      <div className="py-3">
        <label htmlFor="products" className="block pb-2 font-bold">
          Description
        </label>
        <Image
          src={edit ? productStepEdit : productStep}
          alt="product selection"
        />
      </div>
    </>
  );
};

export default ProductStep;

"use client";
import * as GlobalContext from "@/GlobalContext";
import Image from "next/image";
import { Button } from "./Button";
import logo from "../../public/images/logo.svg";

const EditProductHeaderB = () => {
  const { productTitle } = GlobalContext.useGlobalContext();

  return (
    <div className="sticky -top-14 bg-background z-10">
      <header className="grid grid-cols-[auto_1fr_auto] pl-4 bg-white w-full overflow-hidden border-y border-black">
        <a
          href="/products"
          className="flex justify-start py-3 w-12 border-r border-black"
        >
          <Image src={logo} alt="Gumroad logo" width={30} height={30} />
        </a>
        <div className="flex items-center pl-3 font-bold overflow-hidden mr-2">
          <p className="overflow-hidden whitespace-nowrap text-ellipsis">
            {productTitle}
          </p>
        </div>
      </header>
      <div className="p-4">
        <div className="flex gap-2">
          <Button classes={["btn-secondary-w", "btn-icon"]} icon="link" />
          <Button classes={["btn-secondary-w"]} label="Unpublish" />
          <Button classes={["btn-primary"]} label="Save" />
        </div>
      </div>
    </div>
  );
};

export default EditProductHeaderB;

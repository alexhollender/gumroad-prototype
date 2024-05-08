"use client";
import * as GlobalContext from "@/GlobalContext";
import Image from "next/image";
import { LinkButton, Button } from "./Button";
import close from "../../public/images/close.svg";

const EditProductHeaderC = () => {
  const { productTitle } = GlobalContext.useGlobalContext();

  return (
    <div className="bg-background">
      <header className="grid grid-cols-[auto_1fr_auto] pl-4 bg-white w-full overflow-hidden border-y border-black">
        <a
          href="/products"
          className="flex justify-start py-3 w-12 border-r border-black"
        >
          <Image src={close} alt="Gumroad logo" width={30} height={30} />
        </a>
        <div className="flex items-center pl-4 font-bold overflow-hidden mr-2">
          <h1 className="whitespace-nowrap text-ellipsis overflow-hidden">
            {productTitle.length > 0 ? productTitle : "Untitled product"}
          </h1>
        </div>
      </header>
      <div className="p-2 fixed bottom-0 z-10 bg-background border-t border-gray-400 w-full">
        <div className="flex gap-2">
          <Button classes={["btn-secondary-w", "btn-icon"]} icon="link" />
          <Button classes={["btn-secondary-w"]} label="Unpublish" />
          <Button classes={["btn-primary", "flex-1"]} label="Save" />
        </div>
      </div>
    </div>
  );
};

export default EditProductHeaderC;

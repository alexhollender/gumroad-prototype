"use client";
import Image from "next/image";
import { Button } from "./Button";
import logo from "../../public/images/logo.svg";

const EditProductHeader = () => {
  return (
    <header className="grid grid-cols-[auto_1fr_auto] pl-4 bg-white fixed z-10 w-full overflow-hidden top-0 border-y border-black">
      <a
        href="/products"
        className="flex justify-start py-3 w-12 border-r border-black"
      >
        <Image src={logo} alt="Gumroad logo" width={30} height={30} />
      </a>
      <div className="flex">
        <Button
          classes={["btn-secondary-w", "btn-flush", "btn-icon"]}
          icon="link"
        />
        <Button classes={["btn-secondary-w", "btn-flush"]} label="Unpublish" />
        <Button classes={["btn-primary", "btn-flush"]} label="Save" />
      </div>
    </header>
  );
};

export default EditProductHeader;

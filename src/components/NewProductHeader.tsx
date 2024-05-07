"use client";
import * as GlobalContext from "@/GlobalContext";
import Image from "next/image";
import { LinkButton, Button } from "./Button";
import logo from "../../public/images/logo.svg";

type NewProductHeaderProps = {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const NewProductHeader: React.FC<NewProductHeaderProps> = ({
  setActiveTab,
}) => {
  const { step } = GlobalContext.useGlobalContext();

  return (
    <header className="grid grid-cols-[auto_1fr_auto] pl-4 bg-white fixed z-10 w-full top-0 border-y border-black">
      <a
        href="/products"
        className="flex justify-start py-3 w-12 border-r border-black"
      >
        <Image src={logo} alt="Gumroad logo" width={30} height={30} />
      </a>
      <div className="flex">
        {step === "create" && (
          <>
            <LinkButton
              type={["btn-secondary-w", "btn-flush"]}
              label="Cancel"
              url="/products"
            />
            <Button
              type={["btn-primary", "btn-flush"]}
              label="Next: Customize"
              nextStep="product"
              setActiveTab={setActiveTab}
            />
          </>
        )}
        {step === "product" && (
          <>
            <Button
              type={["btn-primary", "btn-flush"]}
              label="Save and continue"
              nextStep="content"
              setActiveTab={setActiveTab}
            />
          </>
        )}
        {step === "content" && (
          <>
            <Button type={["btn-secondary-w", "btn-flush"]} label="Save" />
            <Button
              type={["btn-primary", "btn-flush"]}
              label="Publish"
              nextStep="share"
              setActiveTab={setActiveTab}
            />
          </>
        )}
        {step === "share" && (
          <>
            <Button
              type={["btn-secondary-w", "btn-flush", "btn-icon"]}
              icon="link"
            />
            <Button type={["btn-secondary-w", "btn-flush"]} label="Unpublish" />
            <Button type={["btn-primary", "btn-flush"]} label="Save" />
          </>
        )}
      </div>
    </header>
  );
};

export default NewProductHeader;

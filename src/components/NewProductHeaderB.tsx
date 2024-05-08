"use client";
import * as GlobalContext from "@/GlobalContext";
import Image from "next/image";
import { LinkButton, Button } from "./Button";
import logo from "../../public/images/logo.svg";

type NewProductHeaderProps = {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const NewProductHeaderB: React.FC<NewProductHeaderProps> = ({
  setActiveTab,
}) => {
  const { step, productTitle } = GlobalContext.useGlobalContext();

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
          {step === "create" && <p>What are you creating?</p>}
          {step !== "create" && (
            <h1 className="whitespace-nowrap text-ellipsis overflow-hidden">
              {productTitle.length > 0 ? productTitle : "Untitled product"}
            </h1>
          )}
        </div>
      </header>
      <div className="p-2 mb-2 border-b border-gray-400">
        {step === "create" && (
          <div className="grid grid-cols-2 gap-2">
            <LinkButton
              classes={["btn-secondary-w"]}
              label="Cancel"
              url="/products"
            />
            <Button
              classes={
                productTitle.length < 1
                  ? ["btn-primary", "opacity-50", "pointer-events-none"]
                  : ["btn-primary"]
              }
              label="Next: Customize"
              nextStep="product"
              setActiveTab={setActiveTab}
            />
          </div>
        )}
        {step === "product" && (
          <>
            <Button
              classes={["btn-primary", "w-full"]}
              label="Save and continue"
              nextStep="content"
              setActiveTab={setActiveTab}
            />
          </>
        )}
        {step === "content" && (
          <div className="grid grid-cols-2 gap-2">
            <Button classes={["btn-secondary-w"]} label="Save" />
            <Button
              classes={["btn-primary"]}
              label="Publish"
              nextStep="share"
              setActiveTab={setActiveTab}
            />
          </div>
        )}
        {step === "share" && (
          <div className="flex gap-2">
            <Button classes={["btn-secondary-w", "btn-icon"]} icon="link" />
            <Button classes={["btn-secondary-w"]} label="Unpublish" />
            <Button classes={["btn-primary", "flex-1"]} label="Save" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewProductHeaderB;

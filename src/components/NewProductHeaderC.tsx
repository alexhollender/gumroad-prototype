"use client";
import * as GlobalContext from "@/GlobalContext";
import Image from "next/image";
import { LinkButton, Button } from "./Button";
import logo from "../../public/images/logo.svg";

type NewProductHeaderProps = {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const NewProductHeaderC: React.FC<NewProductHeaderProps> = ({
  setActiveTab,
}) => {
  const { step, productTitle } = GlobalContext.useGlobalContext();

  return (
    <div className="sticky -top-14 bg-background z-10">
      <header className="grid grid-cols-[auto_1fr_auto] pl-4 bg-white w-full border-y border-black">
        <a
          href="/products"
          className="flex justify-start py-3 w-12 border-r border-black"
        >
          <Image src={logo} alt="Gumroad logo" width={30} height={30} />
        </a>
        <div className="flex items-center pl-3 font-bold">
          {step === "create" && <p>What are you creating?</p>}
          {step !== "create" && (
            <p>{productTitle.length > 0 ? productTitle : "Untitled product"}</p>
          )}
        </div>
      </header>
      <div className="p-4">
        {step === "create" && (
          <div className="grid grid-cols-2 gap-2">
            <LinkButton
              type={["btn-secondary-w"]}
              label="Cancel"
              url="/products"
            />
            <Button
              type={["btn-primary"]}
              label="Next: Customize"
              nextStep="product"
              setActiveTab={setActiveTab}
            />
          </div>
        )}
        {step === "product" && (
          <>
            <Button
              type={["btn-primary"]}
              label="Save and continue"
              nextStep="content"
              setActiveTab={setActiveTab}
            />
          </>
        )}
        {step === "content" && (
          <div className="grid grid-cols-2 gap-2">
            <Button type={["btn-secondary-w"]} label="Save" />
            <Button
              type={["btn-primary"]}
              label="Publish"
              nextStep="share"
              setActiveTab={setActiveTab}
            />
          </div>
        )}
        {step === "share" && (
          <div className="flex gap-2">
            <Button type={["btn-secondary-w", "btn-icon"]} icon="link" />
            <Button type={["btn-secondary-w"]} label="Unpublish" />
            <Button type={["btn-primary"]} label="Save" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewProductHeaderC;

"use client";
import * as GlobalContext from "@/GlobalContext";
import * as React from "react";
import NewProductHeader from "@/components/NewProductHeader";
import NewProductHeaderB from "@/components/NewProductHeaderB";
import NewProductHeaderC from "@/components/NewProductHeaderC";
import CreateStep from "@/components/CreateStep";
import TabGroup from "@/components/TabGroup";
import ProductStep from "@/components/ProductStep";
import ContentStep from "@/components/ContentStep";
import ShareStep from "@/components/ShareStep";

const Products = () => {
  const [activeTab, setActiveTab] = React.useState("product");

  const { step, addProduct, productTitle, navVersion } =
    GlobalContext.useGlobalContext();

  const addSampleProduct = () => {
    addProduct({
      _id: "new-product",
      title: "New Product",
      price: 25,
      sales: 350,
    });
  };

  return (
    <>
      {navVersion === "a" && <NewProductHeader setActiveTab={setActiveTab} />}
      {navVersion === "b" && <NewProductHeaderB setActiveTab={setActiveTab} />}
      {navVersion === "c" && <NewProductHeaderC setActiveTab={setActiveTab} />}

      <main className={`mb-16 ${navVersion === "a" && "mt-14"}`}>
        {navVersion === "a" && (
          <header className="py-3 px-4 border-b border-black">
            <h1 className="font-bold">
              {step === "create"
                ? "What are you creating?"
                : productTitle.length > 0
                ? productTitle
                : "Untitled product"}
            </h1>
          </header>
        )}
        {step === "create" && <CreateStep />}
        {step !== "create" && (
          <>
            <div className="p-4 overflow-fade">
              <TabGroup
                tabs={[
                  { _id: "product" },
                  { _id: "content" },
                  { _id: "share" },
                ]}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
            <section className="flex flex-col gap-y-4 mx-4">
              {activeTab === "product" && <ProductStep />}
              {activeTab === "content" && <ContentStep />}
              {activeTab === "share" && <ShareStep />}
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default Products;

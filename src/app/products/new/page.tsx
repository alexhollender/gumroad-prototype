"use client";
import * as GlobalContext from "@/GlobalContext";
import * as React from "react";
import NewProductHeader from "@/components/NewProductHeader";
import TabGroup from "@/components/TabGroup";

const Products = () => {
  const [step, setStep] = React.useState("create");
  const [activeTab, setActiveTab] = React.useState("product");
  const [productTitle, setProductTitle] = React.useState("");

  const { addProduct } = GlobalContext.useGlobalContext();

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
      <NewProductHeader step={step} setStep={setStep} />
      <main className="mt-14">
        {step === "create" && (
          <>
            <header className="py-3 border-b border-black">
              <h1>What are you creating?</h1>
            </header>
            <div>
              <p>
                Make some selections, fill in some boxes, and go live in
                minutes.
              </p>
              <p>Our Help Center has everything you need to know</p>
            </div>
          </>
        )}
        {step !== "create" && (
          <>
            <div>
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
            <section className="flex flex-col gap-y-4 pt-4 mx-4 border-t border-black ">
              {activeTab === "product" && <span>product</span>}
              {activeTab === "content" && <span>product</span>}
              {activeTab === "share" && <span>share</span>}
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default Products;

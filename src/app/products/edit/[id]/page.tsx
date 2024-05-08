"use client";
import * as GlobalContext from "@/GlobalContext";
import * as React from "react";
import EditProductHeader from "@/components/EditProductHeader";
import EditProductHeaderB from "@/components/EditProductHeaderB";
import EditProductHeaderC from "@/components/EditProductHeaderC";
import TabGroup from "@/components/TabGroup";
import ProductStep from "@/components/ProductStep";
import ContentStep from "@/components/ContentStep";
import ShareStep from "@/components/ShareStep";

const Page = ({ params }: { params: { id: string } }) => {
  const [activeTab, setActiveTab] = React.useState("product");

  const { step, navVersion, productTitle, setProductTitle } =
    GlobalContext.useGlobalContext();

  const { products } = GlobalContext.useGlobalContext();

  const findItemById = (id: string) => {
    return products.find((product) => product._id === id);
  };

  const product = findItemById(params.id);

  React.useEffect(() => {
    if (product?.title) {
      setProductTitle(product.title);
    }
  }, []);

  return (
    <>
      {navVersion === "a" && <EditProductHeader />}
      {navVersion === "b" && <EditProductHeaderB />}
      {navVersion === "c" && <EditProductHeaderC />}
      <main className={`mb-16 ${navVersion === "a" && "mt-14"}`}>
        {navVersion === "a" && (
          <header className="py-3 px-4 border-b border-black overflow-hidden mr-2">
            <h1 className="font-bold whitespace-nowrap text-ellipsis overflow-hidden">
              {productTitle.length > 1 ? productTitle : "(Loading...)"}
            </h1>
          </header>
        )}
        <>
          <div className="p-4 overflow-fade">
            <TabGroup
              tabs={[{ _id: "product" }, { _id: "content" }, { _id: "share" }]}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          <section className="flex flex-col gap-y-4 mx-4">
            {activeTab === "product" && <ProductStep edit={true} />}
            {activeTab === "content" && <ContentStep edit={true} />}
            {activeTab === "share" && <ShareStep />}
          </section>
        </>
      </main>
    </>
  );
};

export default Page;

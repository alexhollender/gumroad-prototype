"use client";
import * as GlobalContext from "@/GlobalContext";
import * as React from "react";
import GlobalHeader from "@/components/GlobalHeader";
import { Button, LinkButton } from "@/components/Button";
import TabGroup from "@/components/TabGroup";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const [activeTab, setActiveTab] = React.useState("all-products");

  const { products } = GlobalContext.useGlobalContext();

  return (
    <>
      <GlobalHeader />
      <main className="my-14">
        <header className="flex flex-col gap-y-4 py-4 px-4">
          <div className="grid grid-cols-2 gap-2">
            <Button type={["btn-secondary-g"]} icon="search" />
            <LinkButton
              type={["btn-primary"]}
              label="New product"
              url="/products/new"
            />
          </div>
          <div className="overflow-fade">
            <TabGroup
              tabs={[
                { _id: "all-products" },
                { _id: "discover" },
                { _id: "affiliated" },
                { _id: "collabs" },
              ]}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </header>
        <section className="flex flex-col gap-y-4 pt-4 mx-4 border-t border-black ">
          {activeTab === "all-products" && (
            <>
              <h2 className="text-2xl">Products</h2>
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </>
          )}
          {activeTab === "discover" && <span>Nothing here</span>}
          {activeTab === "affiliated" && <span>...or here</span>}
          {activeTab === "collabs" && (
            <span>
              “At night the cries of cats making love or fighting, their
              caterwauling in the dark, told us that the world was pure emotion,
              flung back and forth among its creatures, even the trees plunged
              in feeling”.
            </span>
          )}
        </section>
      </main>
    </>
  );
};

export default Products;

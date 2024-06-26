"use client";
import * as GlobalContext from "@/GlobalContext";
import * as React from "react";

type Tab = {
  _id: string;
};

type TabGroupProps = {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const TabGroup: React.FC<TabGroupProps> = ({
  tabs,
  activeTab,
  setActiveTab,
}) => {
  const { setStep } = GlobalContext.useGlobalContext();

  const handleClick = (id: Tab["_id"]) => {
    setActiveTab(id);
    if (["product", "content", "share"].includes(id)) {
      setStep(id);
    }
  };

  function slugToString(slug: string) {
    const words = slug.split("-");
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    return words.join(" ");
  }

  return (
    <div className="flex gap-x-2 overflow-x-auto pb-1.5 hide-scroll [&>:last-child]:mr-5">
      {tabs.map((tab) => (
        <button
          key={tab._id}
          onClick={() => handleClick(tab._id)}
          className={`px-4 py-2 border rounded-full bg-white whitespace-nowrap ${
            activeTab === tab._id ? "border-black" : "border-transparent"
          }`}
        >
          {slugToString(tab._id)}
        </button>
      ))}
    </div>
  );
};

export default TabGroup;

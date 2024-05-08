"use client";
import * as GlobalContext from "@/GlobalContext";
import * as React from "react";

const NavVersionControl = () => {
  const { navVersion, setNavVersion } = GlobalContext.useGlobalContext();

  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const options = [
    {
      _id: "a",
      label: "Navigation A (in header)",
    },
    {
      _id: "b",
      label: "Navigation B (below header)",
    },
    {
      _id: "c",
      label: "Navigation C (in footer)",
    },
  ];

  return (
    <div className="fixed z-20 left-0 bottom-16">
      {!showMenu && (
        <button onClick={() => setShowMenu(true)} className="py-3 pr-3 pl-1">
          <div className="w-3 h-3 rounded-full bg-brand"></div>
        </button>
      )}
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-30"
        >
          <menu
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col gap-y-2 bg-background border border-gray-400 rounded p-6 text-center"
          >
            <h1 className="font-bold">Prototype options:</h1>
            {options.map((option) => (
              <button
                key={option._id}
                onClick={() => setNavVersion(option._id)}
                className={`px-4 py-2 border rounded-full bg-white whitespace-nowrap ${
                  navVersion === option._id
                    ? "border-black"
                    : "border-transparent"
                }`}
              >
                {option.label}
              </button>
            ))}
          </menu>
        </div>
      )}
    </div>
  );
};

export default NavVersionControl;

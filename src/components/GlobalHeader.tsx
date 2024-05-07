import Image from "next/image";
import logo from "../../public/images/logo.svg";
import menu from "../../public/images/menu.svg";

const GlobalHeader = () => {
  return (
    <header className="grid grid-cols-[auto_1fr_auto] px-4 bg-black text-white fixed z-10 w-full top-0 border-y border-black [&>div]:py-3">
      <div className="flex justify-start">
        <Image src={logo} alt="Gumroad logo" width={30} height={30} />
      </div>
      <div className="flex justify-center">
        <div>Products</div>
      </div>
      <div className="flex justify-end">
        <Image src={menu} alt="Menu icon" width={26} height={26} />
      </div>
    </header>
  );
};

export default GlobalHeader;

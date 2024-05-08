import Image from "next/image";
import logo from "../../public/images/logo.svg";

const ScreenWidthNotice = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-y-10 bg-black">
      <Image src={logo} alt="Gumroad logo" />
      <h1 className="text-xl pb-3 text-brand text-center px-10">
        Make your screen smaller
        <br />
        (this prototype is intended for mobile devices)
      </h1>
    </div>
  );
};

export default ScreenWidthNotice;

import Image from "next/image";
import { LinkButton } from "@/components/Button";
import logo from "../../public/images/logo.svg";

const Home = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <Image src={logo} alt="Gumroad logo" />
      <LinkButton
        classes={["btn-primary", "w-[calc(100%-2rem)]", "fixed", "bottom-4"]}
        label="View prototype"
        url="/products"
      />
    </div>
  );
};

export default Home;

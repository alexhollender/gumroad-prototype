import Image from "next/image";
import { LinkButton, Button } from "./Button";
import logo from "../../public/images/logo.svg";

type NewProductHeaderProps = {
  step: string;
  setStep: React.Dispatch<React.SetStateAction<string>>;
};

const NewProductHeader: React.FC<NewProductHeaderProps> = ({
  step,
  setStep,
}) => {
  return (
    <header className="grid grid-cols-[auto_1fr_auto] pl-4 bg-white fixed w-full top-0 border-y border-black">
      <div className="flex justify-start py-3 w-12 border-r border-black">
        <Image src={logo} alt="Gumroad logo" width={30} height={30} />
      </div>
      <div className="flex">
        <LinkButton
          type={["btn-secondary-w", "btn-flush"]}
          label="Cancel"
          url="/products"
        />
        <Button
          type={["btn-primary", "btn-flush"]}
          label="Next: Customize"
          nextStep="product"
          setStep={setStep}
        />
      </div>
    </header>
  );
};

export default NewProductHeader;

"use client";
import * as GlobalContext from "@/GlobalContext";
import Image from "next/image";
import search from "../../public/images/search.svg";
import link from "../../public/images/link.svg";

type ButtonProps = {
  classes: string[];
  label?: string;
  icon?: any;
  nextStep?: string;
  setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
};

export const Button: React.FC<ButtonProps> = ({
  classes,
  label,
  icon,
  nextStep,
  setActiveTab,
}) => {
  const { step, setStep, productTitle, addProduct } =
    GlobalContext.useGlobalContext();
  const classNames = ["btn", ...classes].join(" ");

  const handleClick = () => {
    if (nextStep && setActiveTab) {
      setStep(nextStep);
      setActiveTab(nextStep);
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <button className={classNames} onClick={handleClick}>
      {label && label}
      {icon === "search" && (
        <Image src={search.src} alt="search icon" width={26} height={26} />
      )}
      {icon === "link" && (
        <Image src={link.src} alt="link icon" width={26} height={26} />
      )}
    </button>
  );
};

type LinkButtonProps = {
  classes: string[];
  label?: string;
  url: string;
  icon?: string;
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  classes,
  label,
  url,
  icon,
}) => {
  const classNames = ["btn", ...classes].join(" ");
  return (
    <a href={url} className={classNames}>
      {label && label}
      {icon === "search" && (
        <Image src={search.src} alt="search icon" width={26} height={26} />
      )}
      {icon === "link" && (
        <Image src={link.src} alt="link icon" width={26} height={26} />
      )}
    </a>
  );
};

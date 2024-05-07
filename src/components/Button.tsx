"use client";
import * as GlobalContext from "@/GlobalContext";
import Image from "next/image";
import search from "../../public/images/search.svg";
import link from "../../public/images/link.svg";

type ButtonProps = {
  type: string[];
  label?: string;
  icon?: any;
  nextStep?: string;
  setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
};

export const Button: React.FC<ButtonProps> = ({
  type,
  label,
  icon,
  nextStep,
  setActiveTab,
}) => {
  const { step, setStep } = GlobalContext.useGlobalContext();
  const classNames = ["btn", ...type].join(" ");

  const handleClick = () => {
    if (nextStep && setActiveTab) {
      setStep(nextStep);
      setActiveTab(nextStep);
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
  type: string[];
  label: string;
  url: string;
  icon?: string;
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  type,
  label,
  url,
  icon,
}) => {
  const classNames = ["btn", ...type].join(" ");
  return (
    <a href={url} className={classNames}>
      {label}
    </a>
  );
};

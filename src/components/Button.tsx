import Image from "next/image";
import search from "../../public/images/search.svg";

type ButtonProps = {
  type: string[];
  label?: string;
  icon?: any;
  nextStep?: string;
  setStep?: React.Dispatch<React.SetStateAction<string>>;
};

export const Button: React.FC<ButtonProps> = ({
  type,
  label,
  icon,
  nextStep,
  setStep,
}) => {
  const classNames = ["btn", ...type].join(" ");

  const handleClick = () => {
    if (setStep && nextStep) {
      setStep(nextStep);
    }
  };

  return (
    <button className={classNames} onClick={handleClick}>
      {label ? (
        label
      ) : (
        <Image src={search.src} alt="search icon" width={26} height={26} />
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

import Image from "next/image";
import contentStep from "../../public/images/contentStep.png";

const ContentStep = () => {
  return (
    <div className="-mx-4">
      <Image src={contentStep} alt="content area" />
    </div>
  );
};

export default ContentStep;

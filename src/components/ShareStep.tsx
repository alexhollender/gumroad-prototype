import Image from "next/image";
import shareStep from "../../public/images/shareStep.png";

const ShareStep = () => {
  return (
    <div className="py-2">
      <Image src={shareStep} alt="content area" />
    </div>
  );
};

export default ShareStep;

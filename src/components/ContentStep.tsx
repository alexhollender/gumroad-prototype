import Image from "next/image";
import contentStep from "../../public/images/contentStep.png";
import contentStepEdit from "../../public/images/contentStepEdit.png";

type ContentStepProps = {
  edit?: boolean;
};

const ContentStep: React.FC<ContentStepProps> = ({ edit }) => {
  return (
    <div className="-mx-4">
      <Image src={edit ? contentStepEdit : contentStep} alt="content area" />
    </div>
  );
};

export default ContentStep;

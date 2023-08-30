import Image from "next/image";
import NextIcon from "../icons/NextIcon";
import BeforeIcon from "../icons/BeforeIcon";

interface ArticleProps {
  imagePath: string;
  imageAlt: string;
  children: React.ReactNode;
  onPreviousImage: () => void;
  onNextImage: () => void;
}

const Article = ({ imagePath, imageAlt, children, onPreviousImage, onNextImage }: ArticleProps) => {
  return (
    <article className="">
      <div className="relative h-[350px] overflow-hidden">
        <div className="absolute flex w-full justify-between box-border top-[50%] translate-y-[-50%] z-[10]">
          <button onClick={onPreviousImage} className="w-[38px] h-[38px] bg-white rounded-full p-2 flex align-middle justify-center ml-3">
            <BeforeIcon fill="#FFFFFF" />
          </button>
          <button onClick={onNextImage} className="w-[38px] h-[38px] bg-white rounded-full p-2 flex align-middle justify-center mr-3">
            <NextIcon fill="#FFFFFF" />
          </button>
        </div>
        <div className="w-[100%] relative max-w-[400px] aspect-square">
          <Image
            fill
            objectFit="contain"
            src={imagePath}
            alt={imageAlt}
          />
        </div>
      </div>
      {children}
    </article>
  );
};

export default Article;

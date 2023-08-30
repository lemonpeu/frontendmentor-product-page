import Image from "next/image";
import NextIcon from "../icons/NextIcon";
import BeforeIcon from "../icons/BeforeIcon";

interface ArticleProps {
  imagePath: string;
  imageAlt: string;
  children: React.ReactNode;
}

const Article = ({ imagePath, imageAlt, children }: ArticleProps) => {
  return (
    <article className="w">
      <div className="relative">
        <div className="absolute flex w-full justify-between box-border top-[50%] translate-y-[-50%]">
          <button className="w-[38px] h-[38px] bg-white rounded-full p-2 flex align-middle justify-center ml-3">
            <BeforeIcon fill="#FFFFFF" />
          </button>
          <button className="w-[38px] h-[38px] bg-white rounded-full p-2 flex align-middle justify-center mr-3">
            <NextIcon fill="#FFFFFF" />
          </button>
        </div>
        <Image src={imagePath} width={500} height={500} alt={imageAlt} />
      </div>
      {children}
    </article>
  );
};

export default Article;
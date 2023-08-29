import Image from "next/image";

interface ButtonProps {
  title?: string;
  altImage?: string;
  imagePath?: string;
  btnStyles: string;
  titleStyles: string;
  children?: React.ReactNode
}

const Button = ({ title, imagePath, altImage, btnStyles, titleStyles, children }: ButtonProps) => {
  return (
    <button className={`flex ${btnStyles} w-full`}>
      <div>
        {imagePath && (
        //   <Image src={imagePath} width={25} height={25} alt={altImage} fill="#FFFFFF"/>
            children
        )}
      </div>

      <p className={titleStyles}>{title}</p>
    </button>
  );
};

export default Button;

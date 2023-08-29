import Image from "next/image"

interface ArticleProps {
    imagePath: string;
    imageAlt: string;
    children: React.ReactNode
}


const Article = ({imagePath, imageAlt, children}: ArticleProps) => {
    return (
        <article className="w">
            <div></div>
            <Image
                src={imagePath}
                width={500}
                height={500}
                alt={imageAlt}
            />
            {children}
        </article>
    )   
}

export default Article
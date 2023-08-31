import { useState } from "react";
import Article from "../atoms/Article";
import ProductDescription from "../sections/ProductDescription";
import Button from "../atoms/Button";
import CartIcon from "../icons/Cart";
import InputSumToCart from "../atoms/Input";

const minimumImages = 1;
const maxImages = 4;

const ProductContainer = () => {
  const [image, setImage] = useState(1);

  const changeImage = (increment: number) => {
    const newImage = image + increment;
    if (newImage < minimumImages || newImage > maxImages) {
      return;
    }
    setImage(newImage);
  };

  return (
    <section>
      <Article
        onPreviousImage={() => changeImage(-1)}
        onNextImage={() => changeImage(1)}
        imagePath={`/images/image-product-${image}.jpg`}
        imageAlt="White and beige sneakers with a orange background"
      >
        <ProductDescription
          title="Sneaker Company"
          productName="Fall Limited Edition Sneakers"
          productDescription="These low-profile sneakers are your perfect casual wear companion."
          price={125.0}
          discount={50}
          outdatedPrice={250.0}
        />
      </Article>
      <div id="add-to-cart" className="m-5">
        <InputSumToCart />
      </div>
      <div className="px-5 mb-20">
        <Button
          title="Add to cart"
          altImage="Cart"
          imagePath="/images/icon-cart.svg"
          btnStyles="bg-orange-500 justify-center align-center p-4 rounded-[12px]"
          titleStyles="font-bold text-[#FFFFFF] ml-5"
        >
          <CartIcon fill="#FFFFFF" />
        </Button>
      </div>
    </section>
  );
};

export default ProductContainer;

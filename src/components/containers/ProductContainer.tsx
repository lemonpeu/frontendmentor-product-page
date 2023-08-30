import { useState } from "react";
import Article from "../atoms/Article";
import ProductDescription from "../sections/ProductDescription";
import Button from "../atoms/Button";
import CartIcon from "../icons/Cart";
import InputSumToCart from "../atoms/Input";

const ProductContainer = () => {
  const [image, setImage] = useState(1)

  const onPreviousImage = () => {
    const minimumImages = 1
    if(image <= minimumImages) {
      return
    } else {
      setImage(image - 1)
    }
    
  }

  const onNextImage = () => {
    const maxImages = 4
    if(image >= maxImages) {
      return
    } else {
      setImage(image + 1)
    }
  }
  
  return (
    <section>
      <Article
        onPreviousImage={onPreviousImage}
        onNextImage={onNextImage}
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
        <InputSumToCart/>
      </div>
      <div className="px-5 mb-20">
        <Button
          title="Add to cart"
          altImage="Cart"
          imagePath="/images/icon-cart.svg"
          btnStyles="bg-orange-500 justify-center align-center p-4 rounded-[12px]"
          titleStyles="font-bold text-[#FFFFFF] ml-5">
            <CartIcon fill="#FFFFFF"/>
          </Button>
      </div>
    </section>
  );
};

export default ProductContainer;

export interface ProductDescriptionProps {
  title: string;
  productName: string;
  productDescription: string;
  price: number;
  discount?: number;
  outdatedPrice?: number;
}

const ProductDescription = ({
  title,
  productName,
  productDescription,
  price,
  discount,
  outdatedPrice,
}: ProductDescriptionProps) => {
  return (
    <section className="p-5">
      <div className="mb-4">
        <p className="uppercase font-bold text-orange-400 text-xs mb-4 tracking-widest">{title}</p>
        <h1 className="font-bold text-[25px]">{productName}</h1>
      </div>
      <p className="text-gray-500">{productDescription}</p>
      <div className="mt-6 flex justify-between items-center">
        <div className="flex items-center">
          <p className="text-3xl font-bold mr-4">${price}</p>
          {discount && <span className="text-orange-500 font-bold bg-orange-100 rounded-lg p-1">{discount}%</span>}
        </div>
        {outdatedPrice && <span className="text-gray-400 font-bold line-through">${outdatedPrice}</span>}
      </div>
    </section>
  );
};

export default ProductDescription;

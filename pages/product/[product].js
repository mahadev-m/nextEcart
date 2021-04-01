import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ShopContext } from "../../context/shopContext";
import ReactImageMagnify from "react-image-magnify";
// description
const Description = () => {
  const contextData = useContext(ShopContext);
  const router = useRouter();
  const [product, setProduct] = useState();
  useEffect(() => {
    const product = contextData.products.find(
      (product) => product.id === +router.query.product
    );
    setProduct(product);
  }, []);
  return (
    <div className="mt-20 border-b-2 p-2 text-center text-2xl font-bold text-gray-600 tracking-wide">
      <h1>Product Detail</h1>
      {product && product.id ? (
        <div className="lg:my-6 lg:mt-12 lg:flex lg:flex-wrap md:block lg:border- py-10 m-auto">
          <div className="text-center lg:w-1/3 flex pb-6">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: product.image.sourceUrl,
                },
                largeImage: {
                  src: product.image.sourceUrl,
                  width: 1200,
                  height: 1800,
                },
              }}
            />
          </div>
          <div className="block lg:w-2/3 px-12">
            <h1 className="font-extrabold text-gray-600 lg:border-b-4 my-4 text-center text-4xl lg:p-4 m-auto">
              {product.name}
            </h1>

            <h1 className="border-b-5  text-2xl w-28 font-bold text-gray-600 tracking-wider py-2 ">
              Description:
            </h1>
            <p className="lg:m-auto py-10 text-lg font-medium text-justify">
              {product.description}
            </p>
            <p>
              Regular Price: <del>{product.regularPrice}</del>
            </p>
            <p>Offer Price: {product.price}</p>

            <button
              className="text-gray-200 ml-auto items-center lg:w-1/4 lg:p-2 w-full md:py-5 sm:py-3 py-2 sm:mb-4 text-xl bg-gray-800 hover:shadow-xl"
              onClick={() => {
                contextData.addProductToCart(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Description;

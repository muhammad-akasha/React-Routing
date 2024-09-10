import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";

function SingalPro() {
  const { id } = useParams(); // Extract the `id` from the URL
  const [product, setProduct] = useState(null); // State to store product data
  const [err, setErr] = useState(false);

  // Fetch the product based on ID
  useEffect(() => {
    async function getProduct() {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data); // Set the product data to state
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching the product:", error);
        setErr(true);
      }
    }
    getProduct();
  }, [id]); // Dependency array to run the effect when the `id` changes

  if (err) {
    return (
      <>
        <h2 className="text-white text-center my-10 text-[25px]">
          Page Not Found!
        </h2>
      </>
    );
  }

  return (
    <div className="my-10 flex justify-center">
      {product ? (
        <Card
          title={product.title}
          description={product.description}
          brand={product.brand}
          price={product.price}
          category={product.category}
          warrantyInformation={product.warrantyInformation}
          returnPolicy={product.returnPolicy}
          image={product.thumbnail} // Assuming the product has multiple images
        />
      ) : (
        <div className="absolute w-[100%] h-[100vh] top-0 z-10 flex justify-center items-center bg-black">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#1230AE"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            visible={true}
          />
        </div>
      )}
    </div>
  );
}

export default SingalPro;

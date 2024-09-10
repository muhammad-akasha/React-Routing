import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Outlet } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

function Home() {
  const [dummyData, setDummyData] = useState([]);

  async function getDummy() {
    try {
      const gettingData = await axios.get("https://dummyjson.com/products");
      setDummyData(gettingData.data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDummy();
  }, [dummyData]);

  return (
    <div className="flex justify-center flex-wrap gap-10 mt-10">
      {dummyData.length > 0 ? (
        dummyData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            brand={item.brand}
            image={item.thumbnail}
            id={item.id}
            price={item.price}
          />
        ))
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
      <Outlet />
    </div>
  );
}

export default Home;

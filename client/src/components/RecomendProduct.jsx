import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
const RecomendProduct = ({ category, discount, id }) => {
  const [recomended, setRecomended] = useState([]);
  const getAllProducts = async () => {
    const response = await fetch("/api/products/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const recProduct = data.filter((product) => product.category === category);
    setRecomended(recProduct);
    return data;
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="grid grid-cols-1  xs:grid-cols-2 md:grid-cols-3 smd:grid-cols-4 gap-5 w-11/12 mx-auto mb-10">
      {recomended.map((product) => {
        let hide = false;
        if (product._id == id) {
          hide = true;
        }
        return <ProductCard key={product._id} hide={hide} product={product} />;
      })}{" "}
    </div>
  );
};

export default RecomendProduct;

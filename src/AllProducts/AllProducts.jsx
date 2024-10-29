import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Product from "./product";
const AllProducts = ({ handleSelectProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../../public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  console.log(products);

  return (
    <div>
      <h2 className="text-3xl font-semibold">All Products</h2>
      {products.map((product, idx) => (
        <Product
          key={idx}
          product={product}
          handleSelectProduct={handleSelectProduct}
        ></Product>
      ))}
    </div>
  );
};

AllProducts.propTypes = {
  handleSelectProduct: PropTypes.func,
};

export default AllProducts;

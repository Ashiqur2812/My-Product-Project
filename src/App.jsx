import { useState } from "react";
import AllProducts from "./AllProducts/AllProducts";
import CartContainer from "./CartContainer/CartContainer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "active",
  });

  const [selectProduct, setSelectProduct] = useState([]);

  const [price, setPrice] = useState(0);

  const handleAddPrice = (money) => {
    const addMoney = price + money;
    setPrice(addMoney);
  };

  const handleRemovePrice = (id) => {
    const product = selectProduct.find((p) => p.id === id);
    setPrice(price - product.price);
  };

  const handleRemoveProduct = (id) => {
    handleRemovePrice(id);
    const remove = selectProduct.filter((p) => p.id !== id);
    setSelectProduct(remove);
  };

  const handleSelectProduct = (product) => {
    const isExist = selectProduct.find((p) => p.id === product.id);
    if (isExist) {
      alert("You cannot add more than on picture");
    } else {
      handleAddPrice(product.price);
      const newSelectProduct = [...selectProduct, product];
      setSelectProduct(newSelectProduct);
    }
  };

  console.log(selectProduct);

  const handleIsActiveStatus = (status) => {
    if (status === "cart") {
      setIsActive({ cart: true, status: "cart" });
    } else {
      setIsActive({ cart: false, status: "about" });
    }
  };
  return (
    <>
      <Navbar price={price} selectProduct={selectProduct}></Navbar>
      <div className="flex max-w-8xl mx-auto justify-around">
        <AllProducts handleSelectProduct={handleSelectProduct}></AllProducts>
        <CartContainer
          isActive={isActive}
          handleIsActiveStatus={handleIsActiveStatus}
          selectProduct={selectProduct}
          handleRemoveProduct={handleRemoveProduct}
        ></CartContainer>
      </div>
    </>
  );
};

export default App;

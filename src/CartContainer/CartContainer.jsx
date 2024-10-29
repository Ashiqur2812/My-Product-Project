import PropTypes from "prop-types";
import About from "../About/About";
import Cart from "../Cart/Cart";
const CartContainer = ({ handleIsActiveStatus, isActive, selectProduct,handleRemoveProduct }) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold">CartContainer</h2>
      <div className="flex justify-around py-3">
        <div>
          <h2
            onClick={() => handleIsActiveStatus("cart")}
            className={`${
              isActive.cart
                ? "bg-blue-700 text-white cursor-pointer p-3"
                : "cursor-pointer p-3"
            }`}
          >
            Cart
          </h2>
        </div>
        <div>
          <h2
            onClick={() => handleIsActiveStatus("about")}
            className={`${
              isActive.cart
                ? "cursor-pointer p-3"
                : "bg-blue-700 text-white cursor-pointer p-3"
            }`}
          >
            About
          </h2>
        </div>
      </div>
      <div className="flex justify-between">
        {isActive.cart ? (
          <Cart handleRemoveProduct={handleRemoveProduct} selectProduct={selectProduct}></Cart>
        ) : (
          <About></About>
        )}
      </div>
    </div>
  );
};

CartContainer.propTypes = {
  handleIsActiveStatus: PropTypes.func,
  isActive: PropTypes.object,
  selectProduct: PropTypes.object,
};

export default CartContainer;

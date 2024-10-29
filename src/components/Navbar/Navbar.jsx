import PropTypes from "prop-types";

const Navbar = ({ selectProduct,price }) => {
  return (
    <div className="bg-cyan-100">
      <div className="flex justify-between mx-48 items-center py-6">
        <div>
          <p className="text-xl font-medium">Logo</p>
        </div>
        <div className="flex gap-6">
          <div>Home</div>
          <div>Product</div>
          <div>Cart {selectProduct.length}</div>
          <div>$ {price}</div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  selectProduct: PropTypes.object,
  price: PropTypes.object,
};

export default Navbar;

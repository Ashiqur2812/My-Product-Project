import PropTypes from "prop-types";

const Product = ({ product, handleSelectProduct }) => {
  const { image, name, description, price, isFeature } = product;
  return (
    <div className="shadow-2xl w-[32rem] py-8">
      <img className="w-full" src={image} alt="" />
      <h3 className="text-3xl font-semibold text-center py-3">{name}</h3>
      <p className="text-xl font-medium  text-center">{description}</p>
      <h3 className="py-2 text-xl font-medium text-center">${price}</h3>
      <h3 className="text-xl font-medium text-center">
        {isFeature ? "category" : "not category"}
      </h3>
      <button
        onClick={() => handleSelectProduct(product)}
        className="text-lg flex mx-48 border-2 border-gray-500 py-2 px-2 mt-4 cursor-pointer"
      >
        Add To Cart
      </button>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  handleSelectProduct: PropTypes.func,
};

export default Product;

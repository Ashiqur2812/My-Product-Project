import PropTypes from "prop-types";

const Cart = ({ selectProduct,handleRemoveProduct }) => {
  console.log(selectProduct);
  return (
    <div>
      {selectProduct.map((product, idx) => (
        <div
          key={idx}
          className="flex justify-items-center p-2 items-center gap-8"
        >
          <div>
            <img className="w-28 rounded-md" src={product.image} alt="" />
          </div>
          <div>
            <p>{product.name}</p>
          </div>
          <button onClick={()=>handleRemoveProduct(product.id)} className='p-2 border-2 border-gray-600'>Delete</button>
        </div>
      ))}
    </div>
  );
};

Cart.propTypes = {
  selectProduct: PropTypes.object,
};

export default Cart;

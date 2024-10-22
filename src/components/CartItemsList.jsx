import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const { cartItems } = useSelector((state) => state.cartState);

  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} {...item} />;
      })}
    </>
  );
};

export default CartItemsList;

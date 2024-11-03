import { useSelector } from "react-redux";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";

const Checkout = () => {
  const { cartTotal } = useSelector((state) => state.cartState);

  if (cartTotal === 0) {
    return <SectionTitle text='Your cart is empty' />;
  }

  return (
    <>
      <SectionTitle text='place your order'></SectionTitle>
      <div className='mt-8 grid gap-8 md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;

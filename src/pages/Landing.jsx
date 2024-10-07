import Hero from "../components/Hero";
import { customFetch } from "../utils";

const url = "/products?featured=true";

export const loader = async () => {
  const res = await customFetch.get(url);
  const products = res.data.data;
  return products;
};

const Landing = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Landing;

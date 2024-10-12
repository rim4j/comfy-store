import { FeaturedProducts } from "../components";
import Hero from "../components/Hero";
import { customFetch } from "../utils";

const url = "/products?featured=true";

export const Loader = async () => {
  const res = await customFetch.get(url);
  const products = res.data.data;
  return products;
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;

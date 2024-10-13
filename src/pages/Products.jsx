import { useLoaderData } from "react-router-dom";
import { ProductsContainer, Filters, PaginationContainer } from "../components";
import { customFetch } from "../utils";

export const loader = async () => {
  const res = await customFetch.get("/products");
  const allProducts = res.data.data;
  const meta = res.data.meta;
  return { allProducts, meta };
};

const Products = () => {
  const { allProducts, meta } = useLoaderData();
  console.log(allProducts);
  console.log(meta);

  return (
    <div>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </div>
  );
};

export default Products;

import { ProductsContainer, Filters, PaginationContainer } from "../components";
import { customFetch } from "../utils";

export const loader = async () => {
  const res = await customFetch.get("/products");
  const products = res.data.data;
  const meta = res.data.meta;
  return { products, meta };
};

const Products = () => {
  return (
    <div>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </div>
  );
};

export default Products;

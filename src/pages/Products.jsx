import { ProductsContainer, Filters, PaginationContainer } from "../components";
import { customFetch } from "../utils";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const res = await customFetch.get("/products", {
    params,
  });
  const products = res.data.data;
  const meta = res.data.meta;
  return { products, meta, params };
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

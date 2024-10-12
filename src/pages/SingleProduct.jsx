import { useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";

export const loader = async ({ params }) => {
  const resp = await customFetch(`/products/${params.id}`);

  return { product: resp.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsFormat = formatPrice(price);

  return <div>{dollarsFormat} </div>;
};

export default SingleProduct;

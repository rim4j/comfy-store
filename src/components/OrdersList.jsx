import { useLoaderData } from "react-router-dom";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const OrdersList = () => {
  const { meta, orders } = useLoaderData();

  return (
    <div className='mt-8'>
      <h4 className='mb-4 capitalize'>
        total orders : {meta.pagination.total}
      </h4>
      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Cost</th>
              <th className='max-lg:hidden'>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => {
              const id = item.id;
              const { address, name, createdAt, numItemsInCart, orderTotal } =
                item.attributes;
              const date = day(createdAt).format("hh:mm a - MMM Do, YYYY");
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td className='max-lg:hidden'>{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersList;

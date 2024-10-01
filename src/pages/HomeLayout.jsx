import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <h1>home layout</h1>
      <section className='align-element py-20'>
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;

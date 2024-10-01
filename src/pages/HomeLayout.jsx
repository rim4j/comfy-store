import { Outlet } from "react-router-dom";
import { Header } from "../components";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <section className='align-element py-20'>
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;

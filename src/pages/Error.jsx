import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className='grid min-h-[100vh] place-items-center'>
        <div className='text-center'>
          <p className='text-9xl font-semibold text-primary'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>
            page not found
          </h1>
          <p className='mt-6 text-xl leading-7'>
            sorry we could not find the page your looking for
          </p>
          <div className='mt-10'>
            <Link to='/' className='btn btn-secondary'>
              go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className='grid min-h-[100vh] place-items-center'>
      <h4 className='text-center font-bold text-4xl'> There was an error</h4>
    </main>
  );
};

export default Error;

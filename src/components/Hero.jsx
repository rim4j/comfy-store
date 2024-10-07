import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const images = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight max-sm:text-8xl'>
          we are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 '>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi illo
          necessitatibus architecto quo nemo reprehenderit itaque quidem
          corrupti! Alias qui molestias quaerat ipsam commodi repudiandae minus.
          Beatae, ea facilis? Esse.
        </p>
        <div className='mt-10'>
          <Link to='/products' className='btn btn-primary'>
            Our products
          </Link>
        </div>
      </div>
      <div className='max-lg:hidden h-[28rem]   lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
        {images.map((img) => (
          <div key={img} className='carousel-item'>
            <img src={img} className='rounded-box h-full w-80 object-cover' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;

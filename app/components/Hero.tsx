import background from "~/assets/images/background.avif";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="bg-cover bg-center lg:text-center">
      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div>
        <Header />
      </div>

      <div>
        <h1 className="text-5xl md:text-6xl text-white font-semibold px-5 lg:px-8 md:px-6  font-display">
          Hey There!
        </h1>

        <h2 className="text-white text-lg md:text-xl md:text-5xl px-5 md:px-6 lg:px-6 mt-3 ">
          This is my developer portfolio
        </h2>
      </div>
    </section>
  );
};

export default Hero;

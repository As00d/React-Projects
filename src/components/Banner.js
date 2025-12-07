const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 gap-10 animate-fadeIn">
      <div className="flex flex-col flex-1 justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold m-2 tracking-wide bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
          React Projects
        </h1>
        <p className="text-xl m-2 leading-[1.5] tracking-wide">
          Here are some of my recent projects made with{" "}
          <span className="font-bold italic underline underline-offset-1">
            React
          </span>
          . I created these to explore new ideas, improve my skills, and have
          fun building interactive and meaningful user experiences.
        </p>
        <a
          href="https://www.linkedin.com/in/ankitasood2000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#60DBFB] p-3 max-w-48 rounded-md m-2 font-medium transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          LINKEDIN PROFILE
        </a>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src="/hero-1.7c6a8341.svg"
          alt="Hero Graphic"
          className="h-72 md:h-80 drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default Banner;

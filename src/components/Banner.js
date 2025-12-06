const Banner = () => {
  return (
    <section className="flex px-80 py-32 box-border">
      <div className="flex flex-col flex-1 justify-around">
        <h1 className="text-5xl m-2 tracking-widest">React Projects</h1>
        <p className="text-xl m-2 leading-[1.5] tracking-wide">
          Here are some of my recent projects made with{" "}
          <span className="font-bold italic underline underline-offset-1">
            React
          </span>
          . I created these to explore new ideas, improve my skills, and have
          fun building interactive and meaningful user experiences.
        </p>
        <button className="bg-[#60DBFB] p-3 max-w-48 rounded-md m-2 font-medium transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          LINKEDIN PROFILE
        </button>
      </div>
      <div className="flex-1 ">
        <img
          src="/hero-1.7c6a8341.svg"
          alt=""
          className="h-72 justify-self-end"
        />
      </div>
    </section>
  );
};

export default Banner;

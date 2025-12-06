const Project = ({ image, desc, name }) => {
  return (
    <div className="bg-white text-shadow-black m-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer">
      <img src={image} alt="" className="max-w-80 h-64 object-cover" />
      <h2 className="p-4 text-2xl text-center ">{name}</h2>
    </div>
  );
};

export default Project;

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">

      <h1 className="text-xl md:text-4xl font-bold">{title}</h1>

      <p className="hidden md:inline-block py-6 text-sm w-1/4">{overview}</p>

      <div className="my-4 md:m-0">

        <button className="bg-white text-black py-1 md:py-4 px-3 text-xl rounded-lg cursor-pointer hover:bg-gray-300">
          ▶Play
        </button>

        <button className="hidden md:inline-block mx-2 bg-gray-500/60 text-white p-4 px-12 text-xl rounded-lg cursor-pointer hover:bg-gray-600/60">
          {" "}
          More Info
        </button>

      </div>

    </div>
  );
};

export default VideoTitle;

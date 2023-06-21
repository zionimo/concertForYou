const Card = () => {
  return (
    <div className="mt-32 mb-32">
      <div className="relative">
        <img
          className="opacity-25 w-full h-auto max-h-[500px] object-cover"
          src="concert.png"
          alt="concert"
        />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col w-full items-center">
          <h1 className="uppercase md:text-5xl text-2xl">
            Get Tour Tickets Now
          </h1>
          <p className="md:mt-3 md:text-2xl text-base">
            Get a 40% discount on first purchase
          </p>
          <div className="md:mt-14 mt-4">
            <button className="border-2 md:px-5 px-3 md:py-2 py-1 max-md:text-sm hover:bg-white hover:text-black ease-in duration-200">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

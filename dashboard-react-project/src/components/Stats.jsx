/* eslint-disable react/prop-types */
const Stats = ({ stat }) => {
  return (
    <div className="shadow-xl rounded-lg w-1/4 cursor-pointer group hover:bg-lilac transition duration-300 h-25">
      <div className="flex">
        <div className="flex-1">
          <div className="p-10">
            <div>
              <h1 className="text-4xl font-semibold text-lilac padding-bot pb-1 group-hover:text-white">
                {stat.StatValue}
              </h1>
              <p className="text-s font-semibold text-gray-500 group-hover:text-white">
                {stat.name}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="mt-2">
            <img src={stat.icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

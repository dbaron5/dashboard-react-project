/* eslint-disable react/prop-types */
const Stats = ({ stat }) => {
  return (
    <>
      <div className="border-solid border-2 border-sky-500 rounded-lg w-1/4 columns-2">
        <div>
          <div>{stat.name}</div>
          <div>{stat.StatValue}</div>
        </div>
        <div>
          <img src={stat.icon} alt="" />
        </div>
      </div>
    </>
  );
};

export default Stats;

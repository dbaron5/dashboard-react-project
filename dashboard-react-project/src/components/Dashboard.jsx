/* eslint-disable react/prop-types */
import Stats from "./Stats";
import TaskTable from "./TaskTable";
import UserTable from "./UserTable";
import image0copy from "../assets/icon/image0copy.png";

const Dashboard = ({ stats, users, tasks }) => {
  return (
    <>
      <button className="bg-gray-800 rounded text-white transition">Add Tasks</button>
      <div className="flex items-center justify-between px-4 py-2 pb-10">
        <div className="flex items-center pl-96">
          <input
            type="text"
            placeholder="Search..."
            className="border-gray-400 border rounded-3xl px-3 py-1 text-gray-500 leading-tight"
            style={{ width: "200px" }}
          />
        </div>
        <div>
          <img
            src={image0copy}
            alt="Avatar"
            className="h-8 w-8 rounded-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center space-x-7 pl-5 pr-5 pt-2 pb-10">
        {stats.map((stat) => (
          <Stats key={stat.name} stat={stat} />
        ))}
      </div>
      <div className="p-10 h-4/5 justify-evenly flex pr-7">
        <div>
          <TaskTable key={tasks.title} tasks={tasks} />
        </div>
        <div className="flex-col pt-5 text-center h-4/5 shadow-xl rounded-lg">
          <div className="font-bold text-xl pb-10">
            <h1>Users</h1>
          </div>
          {users.map((user) => (
            <UserTable key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

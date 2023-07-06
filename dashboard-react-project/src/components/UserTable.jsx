/* eslint-disable react/prop-types */
const UserTable = ({ user }) => {
  return (
    <>
      <div className="pl-20 pb-5">
        <h1>Users</h1>
        <div className="font-semibold">{user.name}</div>
        <div className="text-gray-400">{user.title}</div>
      </div>
    </>
  );
};

export default UserTable;

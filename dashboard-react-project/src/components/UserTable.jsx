/* eslint-disable react/prop-types */
const UserTable = ({ user }) => {
  return (
    <>
      <div className="pb-10">
        <div className="font-semibold">{user.name}</div>
        <div className="text-gray-400">{user.title}</div>
      </div>
    </>
  );
};

export default UserTable;

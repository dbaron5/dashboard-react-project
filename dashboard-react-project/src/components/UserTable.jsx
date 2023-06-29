/* eslint-disable react/prop-types */
const UserTable = ({ user }) => {
  return (
    <>
      <div>
        <div>{user.name}</div>
        <div>{user.title}</div>
      </div>
    </>
  );
};

export default UserTable;

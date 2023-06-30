/* eslint-disable react/prop-types */
const TaskTable = ({ task }) => {
  return (
    <>
      <div>
        <div>{task.title}</div>
        <div>{task.state}</div>
        <div>{task.description}</div>
        {/* <div>{task.assignee}</div> */}
      </div>
    </>
  );
};

export default TaskTable;

/* eslint-disable react/prop-types */
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo } from "react";

const TaskTable = ({ tasks }) => {
  const data = useMemo(() => tasks, [tasks]);

  /** @type import (`@tanstack/react-table`).ColumnDef<any> */

  const columns = [
    {
      header: `Title`,
      accessorKey: `title`,
    },
    {
      header: `Description`,
      accessorKey: `description`,
    },
    {
      header: `State`,
      accessorKey: `state`,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="shadow-xl rounded-lg">
      <div className="flex justify-between items-center mb-5 pr-2 pt-2">
        <h1 className="text-2xl font-bold text-lilac pl-2 pt-2">Tasks List</h1>
        <button className="px-3 py-2 text-white bg-blue-500 rounded">
          View All
        </button>
      </div>
      <table className="table-auto w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="text-center border-t border-b">
          {table.getRowModel().rows.map((row, index) => (
            <tr
              key={row.id}
              className={index !== 0 ? "border-t" : ""}
              style={{ height: "40px" }}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;

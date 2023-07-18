/* eslint-disable react/prop-types */
import { FaPen, FaTrash } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const TodoList = ({ task, index, deleteTask, markComplete }) => {
  return (
    <>
      <div
        className={
          task.status
            ? "border border-opacity-50 border-gray-700 bg-gray-700"
            : "border border-opacity-50 border-gray-700 bg-gray-800"
        }
      >
        <ul className="grid grid-cols-12 text-lg justify-center items-center">
          <li className="px-3 py-2 col-span-1 h-12">
            <span>{index + 1}</span>
          </li>
          <li className="px-3 py-2 col-span-9 ">
            <p className={task.status ? "line-through" : ""}>{task.title}</p>
          </li>
          <li className="p-2 space-x-2 col-span-2 flex justify-self-end h-12">
            <div className="px-2 py-2 rounded bg-green-500 text-white leading-none">
              <input
                onClick={() => markComplete(task.id)}
                type="checkbox"
                className="w-4 h-4 rounded-sm accent-white leading-none"
                name={`check${task.id}`}
              />
            </div>
            {task.status ? null : (
              <button className="px-2 py-2  rounded bg-blue-500 text-white ">
                <FaPen />
              </button>
            )}
            <button
              onClick={() => deleteTask(task.id)}
              className="px-2 py-2 rounded bg-rose-500 text-white "
            >
              <FaTrash />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TodoList;

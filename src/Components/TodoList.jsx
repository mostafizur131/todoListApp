import { FaTrash } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const TodoList = ({ task, i, deleteTask }) => {
  return (
    <>
      <div className=" border-b border-opacity-20 border-gray-700 bg-gray-800">
        <ul className="grid grid-cols-12">
          <li className="p-1 col-span-1 h-12">
            <span>{i + 1}</span>
          </li>
          <li className="px-3 py-2 col-span-8 ">
            <p>{task}</p>
          </li>
          <li className="p-2 space-x-2 col-span-3 flex justify-self-end h-12">
            <div className="px-2 py-2 font-semibold rounded bg-green-500 text-white leading-none">
              <input
                type="checkbox"
                className="w-4 h-4 rounded-sm accent-white leading-none"
                name={`check${i + 1}`}
              />
            </div>
            <button
              onClick={() => deleteTask(i)}
              className="px-2 py-2 font-semibold rounded bg-rose-500 text-white "
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

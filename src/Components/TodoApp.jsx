import { useState } from "react";
import TodoList from "./TodoList";
import EditTask from "./EditTask";

const TodoApp = () => {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  // Modal State
  const [openModal, setOpenModal] = useState(false);
  const [updatedData, setUpdatedData] = useState("");

  // Add Task Data
  const addTask = () => {
    if (newTask) {
      const num = tasks.length + 1;
      const newEntry = { id: num, title: newTask, status: false };
      setTask([...tasks, newEntry]);
      setNewTask("");
    }
  };

  // Mark Complete Task Item
  const markComplete = (id) => {
    const newTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTask(newTask);
  };

  //Delete Task Item
  const deleteTask = (id) => {
    const updatedTaskList = tasks.filter((task) => task.id !== id);
    setTask(updatedTaskList);
  };

  // Handle Modal
  const handleOpenModal = (data) => {
    setOpenModal(true);
    setUpdatedData(data);
  };
  // Close Modal
  const handleCloseModal = () => setOpenModal(false);

  // Edit Task Item
  const handleEditTask = (e) => {
    const newEntry = {
      id: updatedData.id,
      title: e.target.value,
      status: updatedData.status ? true : false,
    };
    setUpdatedData(newEntry);
  };

  // Update Task
  const updateTask = () => {
    const filteredRecords = [...tasks].filter(
      (task) => task.id !== updatedData.id
    );
    const updatedObj = [...filteredRecords, updatedData];
    setTask(updatedObj);
    setUpdatedData("newEntry");
    handleCloseModal();
  };

  return (
    <div className="bg-gray-200 h-screen py-10">
      <fieldset className="w-full md:w-3/5 px-5 md:px-0 mx-auto text-gray-900">
        <div className="w-full md:w-3/4 mx-auto">
          <label className="block text-2xl font-medium pb-3">Add Task</label>
          <div className="flex">
            <input
              value={newTask}
              onChange={(e) => {
                setNewTask(e.target.value);
              }}
              type="text"
              placeholder="Write Something"
              className="flex flex-1 border-2 border-r-0 sm:text-sm rounded-l-md bg-blue-50 border-gray-400 text-gray-900 px-2 py-3 focus:outline-none "
            />
            <span
              onClick={addTask}
              className="flex items-center px-5 text-2xl rounded-r-md border-0 bg-gray-400 text-white cursor-pointer hover:bg-gray-700 transition duration-150 ease-out hover:ease-in"
            >
              +
            </span>
          </div>
        </div>
        <hr className="border-b-2 border-b-gray-700 my-10" />
      </fieldset>
      <div className="w-full md:w-3/5 px-5 md:px-0 mx-auto ">
        <div className="p-2 rounded-md sm:p-4 text-gray-100 bg-gray-900">
          <h2 className="mb-3 text-2xl font-semibold ">Lists</h2>
          <div className="overflow-x-auto">
            <div className="min-w-full text-sm">
              <div className="rounded-t-lg text-gray-900 font-bold bg-gray-200">
                <ul className="grid grid-cols-12">
                  <li className="text-lg p-3 col-span-1">#</li>
                  <li className="text-lg p-3 col-span-8">Tasks</li>
                  <li className="text-lg p-3 col-span-3 justify-self-end">
                    <p>Actions</p>
                  </li>
                </ul>
              </div>
              {tasks.length === 0 ? (
                <p className="text-3xl text-center font-bold py-3 text-red-500">
                  Your Task List is Empty
                </p>
              ) : (
                tasks.map((task, i) => (
                  <TodoList
                    task={task}
                    key={task.id}
                    index={i}
                    deleteTask={deleteTask}
                    markComplete={markComplete}
                    handleOpenModal={handleOpenModal}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {openModal && (
        <EditTask
          handleCloseModal={handleCloseModal}
          updatedData={updatedData}
          handleEditTask={handleEditTask}
          updateTask={updateTask}
        />
      )}
    </div>
  );
};

export default TodoApp;

import { useState } from "react";
import TodoList from "./TodoList";


const TodoApp = () => {
    const [tasks, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');
    const addTask = () => {
    if (newTask.trim() !== '') {
      setTask([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index)=>{
    const updatedTaskList = [...tasks];
    updatedTaskList.splice(index, 1)
    setTask(updatedTaskList)

  }

    return (
        <div className="bg-gray-200 h-screen py-10">
            <fieldset className="w-full md:w-3/5 px-5 md:px-0 mx-auto text-gray-900">
                <div className="w-full md:w-3/4 mx-auto">
                    <label className="block text-2xl font-medium pb-3">Add Task</label>
                    <div className="flex">
                        <input value={newTask} onChange={(e)=>{setNewTask(e.target.value)}} type="text" placeholder="Write Something" className="flex flex-1 border-2 border-r-0 sm:text-sm rounded-l-md bg-blue-50 border-gray-400 text-gray-900 px-2 py-3 focus:outline-none " />
                        <span onClick={addTask} className="flex items-center px-5 text-2xl rounded-r-md border-0 bg-gray-400 text-white cursor-pointer hover:bg-gray-700 transition duration-150 ease-out hover:ease-in">+</span>
                    </div>
                </div>
                <hr className="border-b-2 border-b-gray-700 my-10"/>
            </fieldset>
            <div className="w-full md:w-3/5 px-5 md:px-0 mx-auto ">
	            <div className="p-2 rounded-md sm:p-4 text-gray-100 bg-gray-900">
                    <h2 className="mb-3 text-2xl font-semibold ">Lists</h2>
                    <div className="overflow-x-auto">
                        <div className="min-w-full text-sm">
                            <div className="rounded-t-lg bg-gray-700">
                                <ul className="grid grid-cols-12">
                                    <li className="text-lg p-3 col-span-1">#</li>
                                    <li className="text-lg p-3 col-span-8">Tasks</li>
                                    <li className="text-lg p-3 col-span-3 justify-self-end">
                                        <p >Actions</p>
                                    </li>
                                </ul>
                            </div>
                            {tasks.length ===0 ? <p className="text-3xl text-center font-bold py-3 text-red-500">Your Task List is Empty</p>: tasks.map((task, i)=> <TodoList task={task} key={i} i={i} deleteTask={deleteTask} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
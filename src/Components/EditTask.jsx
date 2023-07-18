/* eslint-disable react/prop-types */
const EditTask = ({
  handleCloseModal,
  updatedData,
  handleEditTask,
  updateTask,
}) => {
  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 right-0 backdrop-blur-sm flex  justify-center items-center">
        <div className="relative max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 bg-gray-900 text-gray-100 flex-1">
          <button
            onClick={() => handleCloseModal()}
            className="absolute top-2 right-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="flex-shrink-0 w-6 h-6"
            >
              <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
            </svg>
          </button>

          <div>
            <h2 className="text-2xl font-semibold text-white py-5">
              Update Your Task!
            </h2>
            <input
              value={updatedData && updatedData.title}
              onChange={(e) => handleEditTask(e)}
              type="text"
              placeholder="Write Something"
              className="border-2 rounded-md bg-blue-50 border-gray-400 text-gray-900 px-2 py-3 focus:outline-none w-full"
            />
          </div>

          <div className="space-x-2 pt-5">
            <button
              onClick={updateTask}
              type="button"
              className="px-8 py-2 font-semibold rounded-full bg-green-400 text-gray-100"
            >
              Update
            </button>
            <button
              onClick={() => handleCloseModal()}
              type="button"
              className="px-8 py-2 font-semibold rounded-full bg-rose-400 text-gray-100"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTask;

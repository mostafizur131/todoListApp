const Header = () => {
  return (
    <header className="p-4 bg-gray-800 text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 text-2xl font-semibold"
        >
          To Do App
        </a>
        <div className="flex items-center">
          <button
            type="button"
            className="hidden px-6 py-2 font-semibold rounded lg:block bg-rose-400 text-white"
          >
            Log in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

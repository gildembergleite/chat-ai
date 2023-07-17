export default function () {
  return (
    <footer className="bg-white rounded-lg shadow mx-2 my-8 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Development with &hearts; by{' '}
          <a href="https://github.com/gildembergleite/" className="hover:underline">Gildemberg</a>.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://github.com/gildembergleite/chat-ai" className="mr-4 hover:underline md:mr-6 ">Repository</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/gildembergleite/" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>

  );
}
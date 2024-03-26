import Appbar from "../components/Appbar";

const Publish = () => {
  return (
    <>
      <Appbar />
      <div className="w-[80%] m-auto">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 "
          placeholder="Title"
        ></textarea>
      </div>
    </>
  );
};

export default Publish;

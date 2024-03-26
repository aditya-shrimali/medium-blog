import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

const Appbar = () => {
  return (
    <div className="border-b-2">
      <div className="flex justify-between w-[90%] m-auto mb-1 mt-1">
        <Link
          to={"/blogs"}
          className="flex flex-col justify-center cursor-pointer"
        >
          Medium
        </Link>
        <div className="flex items-center gap-4">
          <Link to={"/publish"} className="flex items-center">
            <button className="bg-gray-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">
              New
            </button>
          </Link>
          <Avatar name="Aditya" />
        </div>
      </div>
    </div>
  );
};

export default Appbar;

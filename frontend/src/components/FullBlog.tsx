import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <div className="flex w-[80%] gap-10 m-auto p-6 mt-10">
        <div className="w-full">
          <div className="text-7xl font-bold">{blog.title}</div>
          <div className="text-slate-600 pt-2">Posted on 1st Dec, 2023</div>
          <div className="text-3xl text-slate-700 pt-4">{blog.content}</div>
        </div>
        <div className="w-full">
          Author
          <div className="flex gap-3">
            <div className="flex flex-col justify-center">
              <Avatar name={blog.author.name || "Anonymous"} />
            </div>
            <div className="right">
              <div className="text-2xl font-semibold">
                {blog.author.name || "Anonymous"}
              </div>
              <div className="pt-1 text-slate-600">
                Random catch phrase to grab the user's attention
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;

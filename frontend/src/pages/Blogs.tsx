import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Appbar />
      <div className="w-[80%] m-auto">
        {blogs.map((blog) => (
          <BlogCard
            id={blog.id}
            title={blog.title}
            authorName={blog.author.name || "Anonymous"}
            publishedDate={"Unknown"}
            content={blog.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;

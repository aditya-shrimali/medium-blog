import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import FullBlog from "../components/FullBlog";
import Appbar from "../components/Appbar";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: Number(id),
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Appbar />
      <FullBlog blog={blog} />
    </div>
  );
};

export default Blog;

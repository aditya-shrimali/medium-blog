interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <>
      <div>
        <div className="flex m-auto border-b-2 pb-3">
          <div className="left flex-2 w-[80%]">
            <div className="head flex mb-2 mt-2">
              <div className="flex justify-center flex-col mr-2">
                <Avatar name={authorName} />
              </div>
              <div className="text-lg mr-1">{authorName}</div>
              <div className="text-xs flex justify-center flex-col mr-1 text-gray-500">
                &#9679;
              </div>
              <div className="text-lg text-slate-600">{publishedDate}</div>
            </div>
            <h1 className="font-semibold text-2xl">{title}</h1>
            <p>{content.slice(0, 200) + "..."}</p>
            <div className="mt-2">
              {`${Math.ceil(content.length / 100)} min`} read
            </div>
          </div>
          <div className="right flex flex-1 items-center justify-center">
            <div>images</div>
          </div>
        </div>
      </div>
    </>
  );
};

function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-300">
      <span className="font-medium text-gray-900 dark:text-gray-900">
        {name[0]}
      </span>
    </div>
  );
}

export default BlogCard;

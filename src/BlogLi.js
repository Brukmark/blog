import { Link } from "react-router-dom";
const BlogList = ({ blogs, meow }) => {
  // const blogs = props.blogs;
  // const meow = props.blogs;

  return (
    <div className="blog-list">
      <h2>{meow}</h2>
      {blogs.map((x) => (
        <div className="blog-preview" key={x.id}>
          <Link to={`/blogs/${x.id}`}>
            <h2>{x.title}</h2>
            <p>written by {x.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

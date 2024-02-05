//import { useState, useEffect } from "react";

import BlogLi from "./BlogLi";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div> {error}</div>}
      {blogs && <BlogLi blogs={blogs} meow="ALL BLOGS" />}
      {isPending && <div>loading...</div>}
    </div>
  );
};

export default Home;

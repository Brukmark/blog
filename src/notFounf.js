import { Link } from "react-router-dom";

const notFound = () => {
  return (
    <div className="not-Found">
      <h2>Sorry</h2>
      <p>that page couldn't be found</p>
      <Link to="/">back to home...</Link>
    </div>
  );
};

export default notFound;

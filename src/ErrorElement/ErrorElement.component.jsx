import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div>
      Something went Wrong!
      <Link to="/">Go to Homepage</Link>
    </div>
  );
};

export default ErrorElement;

import { Link, useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      {error.data}
      <Link to="/">Go to Homepage</Link>
    </div>
  );
};

export default ErrorElement;

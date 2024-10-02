import { useRouteError, Link } from 'react-router-dom';



const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="err">
      <div class="error-container">
        <h1 class="error-code"></h1>
        <h2 class="error-message"></h2>
        <h1>
          {err.status}: {err.statusText}
        </h1>
        <h2>The page you're looking for doesn't exist or an error occurred. Please go back or visit the homepage.</h2>
        <Link to='/' class="home-button">Go to Homepage</Link>
      </div>
    </div>
  );
};

export default Error;

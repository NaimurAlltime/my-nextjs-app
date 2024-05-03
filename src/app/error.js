"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h2 className="text-center text-3xl text-red-500">
        Something went wrong
      </h2>
      <h2 className="text-center text-xl text-red-400 my-4">{error.message}</h2>
      <div className="w-full flex justify-center">
        <button
          onClick={() => reset()}
          className="btn btn-outline btn-info rounded-md"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="mt-5 btn btn-active btn-primary mr-4"
      >
        Increace
      </button>
      <h2 className="mt-5"> {count} </h2>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        className="mt-5 ms-4 btn btn-active btn-accent mr-4"
      >
        Decreace
      </button>
    </div>
  );
};

export default Counter;

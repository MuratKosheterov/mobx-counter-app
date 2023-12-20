import { observer } from "mobx-react-lite";
import React from "react";
import CounterStore from "../redux/CounterStore";

const Counter = observer(() => {
  const { count, inc, dec, reset, total } = CounterStore;

  return (
    <div className=" flex justify-center flex-col items-center h-screen bg-gray-500 text-white">
      <h1 className="mb-10 text-4xl uppercase ">mobx counter</h1>
      <div className=" flex items-center  justify-between w-[250px] mx-auto ">
        <button
          className="py-2 px-5  bg-green-600 rounded-md"
          onClick={() => inc()}
        >
          inc ( + )
        </button>
        <p>{count}</p>
        <button
          className="py-2 px-5  bg-red-600 rounded-md"
          onClick={() => dec()}
        >
          dec ( - )
        </button>
      </div>
      <button
        className="py-2 px-5  bg-orange-600 text-white mt-10"
        onClick={() => reset()}
      >
        Reset
      </button>
    </div>
  );
});

export default Counter;

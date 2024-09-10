import React from "react";
import useStopwatch from "../pages/useStopwatch";

const Stopwatch = () => {
  const { Start, time, Stop, Reset } = useStopwatch();

  return (
    <div className="flex flex-col items-center w-[40%] p-6 bg-gray-100 rounded-lg shadow-lg">
      <h3 className="text-3xl font-bold">Stop Watch</h3>
      <div className="text-6xl w-[50%] mx-auto font-mono">
        {time.hr}:{time.min}:{time.sec}:{time.milli}
      </div>
      <div className="space-x-4">
        <button
          onClick={() => Start()}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
        >
          {"Start"}
        </button>
        <button
          onClick={Stop}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
        >
          {"Stop"}
        </button>
        <button
          onClick={Reset}
          className="px-4 py-2 bg-sky-500 text-white rounded-lg shadow hover:bg-sky-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;

import React, { useState } from "react";
import Card from "./cards";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 > reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surprisedHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className="w-[90vw] max-w-[800px]   bg-white rounded-md flex flex-col justify-center items-center p-6 md:p-10 transition-all duration-700 hover:shadow-xl dark:bg-black">
      <Card review={reviews[index]}></Card>
      <div className="flex mt-6 md:mt-10 mx-auto text-2xl md:text-3xl gap-4 text-violet-400 font-bold">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-violet-500 transition-colors duration-300"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-violet-500 transition-colors duration-300"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-6">
        <button
          onClick={surprisedHandler}
          className="bg-black dark:bg-white text-white dark:text-black transition-all duration-300 cursor-pointer px-6 md:px-10 py-2 md:py-3 font-bold text-md md:text-lg rounded-lg hover:scale-105"
        >
          Next ⏭️
        </button>
      </div>
    </div>
  );
};

export default Testimonials;

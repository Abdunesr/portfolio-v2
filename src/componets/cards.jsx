import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  let review = props.review;
  return (
    <div className="flex flex-col items-center md:relative p-4 sm:p-6 lg:p-8">
      {/* Profile Image Section */}
      <div className="relative">
        <img
          className="aspect-square rounded-full w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px] shadow-md"
          src={review.image}
          alt={`${review.name}'s avatar`}
        />
        <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px] bg-black rounded-full absolute top-[-4px] left-[6px] z-[-10] dark:bg-white"></div>
      </div>

      {/* Name and Job Title */}
      <div className="text-center mt-6">
        <p className="tracking-wider font-bold text-xl sm:text-2xl lg:text-3xl capitalize">
          {review.name}
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 uppercase">
          {review.job}
        </p>
      </div>

      {/* Quote Icon and Review Text */}
      <div className="text-violet-500 mt-4">
        <FaQuoteLeft size={24} />
      </div>
      <div className="text-center mt-4 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-200">
        <p>"{review.text}"</p>
      </div>
      <div className="text-violet-500 mt-4">
        <FaQuoteRight size={24} />
      </div>
    </div>
  );
};

export default Card;

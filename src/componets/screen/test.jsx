import Testimonials from "../Testimonials";
import reviews from "../../data/data";

export default function Test() {
  return (
    <div
      id="article"
      className="flex  mt-16 flex-col w-[100vw] h-[100vh] justify-center items-center bg-white dark:bg-black"
    >
      <div className="text-center ">
        <h1 className="text-4xl font-bold">MY Testimonials</h1>
        <div className="bg-black h-[4px] w-1/5 mt-1 mx-auto dark:bg-white"></div>
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
}

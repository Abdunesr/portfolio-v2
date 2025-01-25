import React from "react";
import { Carousel, Card } from "../componets/ui/apple-cards-carousel.jsx";
import expense3 from "../assets/images/projects/expense5.png";
import ecomerce1 from "../assets/images/projects/ecomerce1.png";
import movie2 from "../assets/images/projects/movie2.png";
import movie7 from "../assets/images/projects/movie7.png";
import meal5 from "../assets/images/projects/meal5.png";
import exam from "../assets/images/projects/exam.png";
import grade1 from "../assets/images/projects/grade1.jpg";
import reactfastpiza from "../assets/images/projects/reactfastpizza.png";
import popcorn from "../assets/images/projects/popcorn.png";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div id="projects" className="w-full h-full py-8 overflow-hidden">
      <h2 className="max-w-7xl pl-4 mx-auto text-base md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans overflow-hidden">
        Samples of My Works
      </h2>

      <Carousel items={cards} />
    </div>
  );
}

const DynamicContent = ({ description, imageSrc, githubLink }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-4 md:p-6 rounded-xl mb-4 hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out overflow-hidden">
      <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-lg font-sans max-w-2xl mx-auto scroll-smooth">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {description.title}
        </span>{" "}
        {description.content}
        <p>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 hover:text-yellow-300 font-semibold "
          >
            For more Github⭐
          </a>
        </p>
      </p>
      <img
        loading="lazy"
        src={imageSrc}
        alt="Project mockup"
        className="md:w-1/2 md:h-1/2 w-3/4 mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "E-comerce flutter app",
    title: "Naf E-comerce project",
    src: ecomerce1,
    content: (
      <DynamicContent
        description={{
          title: "E-commerce Flutter Application",
          content:
            "A fully functional Flutter e-commerce application built with modern architecture and design patterns, offering features like product filtering, cart management, and Stripe integration.",
        }}
        imageSrc={ecomerce1}
        githubLink="https://github.com/Abdunesr/Ecommerce_app_flutter" // Replace with your GitHub repo link
      />
    ),
  },
  {
    category: "Expense tracker flutter app",
    title: "Expense tracker flutter app.",
    src: expense3,
    content: (
      <DynamicContent
        description={{
          title: "Expense Tracker Flutter App",
          content:
            "Track your daily expenses, set budgets, and view spending habits with charts. This app allows you to easily monitor your finances and keep track of all transactions.",
        }}
        imageSrc={expense3}
        githubLink="https://github.com/Abdunesr/Expense_tracker_with_dark_mode" // Replace with your GitHub repo link
      />
    ),
  },
  {
    category: "Movie flutter app",
    title: "API Integration",
    src: movie2,
    content: (
      <DynamicContent
        description={{
          title: "Movie Search App",
          content:
            "An app that integrates with the Movie DB API to provide movie details, including ratings, reviews, and trailers. Perfect for movie lovers!",
        }}
        imageSrc={movie2}
        githubLink="https://github.com/Abdunesr/Movie_flutter-app" // Replace with your GitHub repo link
      />
    ),
  },
  {
    category: "Hotel meal tracker flutter app",
    title: "Meal tracker filtering.",
    src: meal5,
    content: (
      <DynamicContent
        description={{
          title: "Meal Tracker Flutter App",
          content:
            "A meal tracking app that helps users log their meals, track nutritional information, and filter options based on dietary preferences.",
        }}
        imageSrc={meal5}
        githubLink="https://github.com/Abdunesr/Hotel_Meal_Trackr_APP" // Replace with your GitHub repo link
      />
    ),
  },
  {
    category: "online Examination System",
    title: "React app",
    src: exam,
    content: (
      <DynamicContent
        description={{
          title: "Online Examination System",
          content:
            "A React-based application for conducting online exams with features like real-time question selection, answer validation, and score management.",
        }}
        imageSrc={exam}
        githubLink="https://github.com/yourusername/online-exam" // Replace with your GitHub repo link
      />
    ),
  },
  {
    category: "Grade calculator",
    title: "University Grade calculator flutter app",
    src: grade1,
    content: (
      <DynamicContent
        description={{
          title: "Grade Calculator Flutter App",
          content:
            "An app for university students to calculate their grades based on credits and weightage of subjects. It provides an easy interface for tracking academic performance.",
        }}
        imageSrc={grade1}
        githubLink="https://github.com/Fuadseid/GPA-calculator-project" // Replace with your GitHub repo link
      />
    ),
  },
  {
    category: "React popcorn APP",
    title: "React app",
    src: movie7,
    content: (
      <DynamicContent
        description={{
          title: "Movie React app api intergration",
          content:
            "UsePopcorn is a dynamic and interactive React-based movie discovery application that allows users to explore, search, and manage their favorite movies. Powered by a modern design and seamless API integrations, the app delivers an engaging user experience, making it an excellent tool for movie enthusiasts.",
        }}
        imageSrc={popcorn}
        githubLink="https://github.com/Abdunesr/movie-website-" // Replace with your GitHub repo link
      />
    ),
  },
  {
    category: "React popcorn APP",
    title: "React app",
    src: reactfastpiza,
    content: (
      <DynamicContent
        description={{
          title: "Movie React app api intergration",
          content:
            "The Pizza App is a modern, user-friendly web application designed to simplify the process of ordering your favorite pizzas. Built with React, this app provides an intuitive interface where users can browse, customize, and order pizzas with ease.",
        }}
        imageSrc={reactfastpiza}
        githubLink="https://github.com/Abdunesr/movie-website-" // Replace with your GitHub repo link
      />
    ),
  },
];

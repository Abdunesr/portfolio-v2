import React, { useState, useEffect, useRef } from "react";

function Services() {
  const services = [
    {
      name: "Web Development",
      description:
        "Building responsive and interactive websites using modern frameworks and technologies.",
      experience:
        "I have 3+ years of experience building scalable and optimized websites using frameworks like React, Vue, and Node.js. I specialize in responsive design and performance optimization.",
    },
    {
      name: "Mobile App Development",
      description:
        "Creating user-friendly mobile applications for both iOS and Android platforms.",
      experience:
        "With 2+ years of experience in Flutter and React Native, I develop cross-platform mobile apps that deliver seamless user experiences and are highly performant.",
    },
    {
      name: "UI/UX Design",
      description:
        "Designing intuitive and engaging user interfaces to enhance user experience.",
      experience:
        "I specialize in creating visually appealing designs with a focus on user-centered design principles. I use tools like Figma and Adobe XD to create intuitive, user-friendly designs.",
    },
    {
      name: "Project Management",
      description:
        "Improving website visibility and ranking on search engines through effective SEO strategies.",
      experience:
        "I have managed several projects from inception to delivery, ensuring timely completion, budget adherence, and client satisfaction. I excel in Agile and Scrum methodologies.",
    },
    {
      name: "Digital Marketing",
      description:
        "Crafting targeted marketing campaigns to reach and engage your audience online.",
      experience:
        "I have experience in crafting data-driven digital marketing campaigns, including Google Ads, SEO, content marketing, and social media management to drive brand awareness and engagement.",
    },
    {
      name: "Content Writing",
      description:
        "Producing high-quality content that resonates with your target audience and boosts engagement.",
      experience:
        "I create compelling content tailored to your brand's voice and audience. With years of experience in writing blogs, articles, and web copy, I ensure your message is engaging and optimized for SEO.",
    },
  ];

  const [inView, setInView] = useState(Array(services.length).fill(false));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const observers = useRef([]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute("data-index"));
        if (entry.isIntersecting) {
          setInView((prev) => {
            const updatedInView = [...prev];
            updatedInView[index] = true;
            return updatedInView;
          });
        }
      });
    };

    const options = {
      rootMargin: "0px",
      threshold: 0.1,
    };

    observers.current = services.map((_, index) => {
      const observer = new IntersectionObserver(handleIntersection, options);
      const element = document.querySelector(`#service-box-${index}`);
      if (element) observer.observe(element);
      return observer;
    });

    return () => {
      observers.current.forEach((observer) => observer.disconnect());
    };
  }, [services.length]);

  const openModal = (service) => {
    setModalContent(service.experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <section
      id="services"
      className="relative py-10 px-4 m-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
        My Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            id={`service-box-${index}`}
            data-index={index}
            onClick={() => openModal(service)}
            className={`p-6 border border-gray-300 rounded-lg shadow-lg transform cursor-pointer transition-all duration-700 ease-out ${
              inView[index]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            } hover:scale-105 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:text-white`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <h3 className="text-xl font-semibold text-center">
              {service.name}
            </h3>
            <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-lg w-full dark:bg-gray-800 dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-semibold text-center mb-4">
              Service Experience
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{modalContent}</p>
            <button
              onClick={closeModal}
              className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;

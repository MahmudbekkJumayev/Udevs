"use client";

import React, { useState } from "react";

const tools = [
  { category: "DevOps", name: "Promotheus", img: "/assets/icons/tools1.svg" },
  { category: "DevOps", name: "Loki", img: "/assets/icons/tools2.svg" },
  { category: "DevOps", name: "Bitbucket", img: "/assets/icons/tools3.svg" },
  { category: "DevOps", name: "Gitlab", img: "/assets/icons/tools4.svg" },
  { category: "Mobile", name: "Kotlin", img: "/assets/icons/tools5.svg" },
  { category: "Mobile", name: "Android", img: "/assets/icons/tools6.svg" },
  { category: "Mobile", name: "JAVA", img: "/assets/icons/tools7.svg" },
  {
    category: "Infrastructure",
    name: "Azure",
    img: "/assets/icons/tools8.svg",
  },
  { category: "Infrastructure", name: "GCP", img: "/assets/icons/tools9.svg" },
  {
    category: "Infrastructure",
    name: "DigitalOcean",
    img: "/assets/icons/tools10.svg",
  },
  { category: "Infrastructure", name: "AWS", img: "/assets/icons/tools11.svg" },
  {
    category: "Infrastructure",
    name: "Kubernetes",
    img: "/assets/icons/tools12.svg",
  },
  { category: "DevOps", name: "ELK", img: "/assets/icons/tools13.svg" },
  { category: "DevOps", name: "Grafana", img: "/assets/icons/tools14.svg" },
  { category: "DevOps", name: "Terraform", img: "/assets/icons/tools15.svg" },
  { category: "Mobile", name: "IOS", img: "/assets/icons/tools16.svg" },
  { category: "Mobile", name: "Swift", img: "/assets/icons/tools17.svg" },
  { category: "Mobile", name: "Flutter", img: "/assets/icons/tools1.svg" },
  { category: "Frontend", name: "Next.JS", img: "/assets/icons/tools18.svg" },
  { category: "Frontend", name: "React.JS", img: "/assets/icons/tools19.svg" },
  {
    category: "Frontend",
    name: "JavaScript",
    img: "/assets/icons/tools20.svg",
  },
  { category: "UI/UX", name: "Balsamic", img: "/assets/icons/tools21.svg" },
  { category: "UI/UX", name: "Invision", img: "/assets/icons/tools22.svg" },
  { category: "UI/UX", name: "Figma", img: "/assets/icons/tools23.svg" },
  { category: "DevOps", name: "Docker", img: "/assets/icons/tools24.svg" },
  { category: "Backend", name: "PostgreSQL", img: "/assets/icons/tools25.svg" },
  { category: "Backend", name: "Python", img: "/assets/icons/tools26.svg" },
  { category: "Backend", name: "Node.JS", img: "/assets/icons/tools27.svg" },
  { category: "Backend", name: "PHP", img: "/assets/icons/tools28.svg" },
  { category: "Backend", name: "GO", img: "/assets/icons/tools29.svg" },
  { category: "Frontend", name: "AntDesign", img: "/assets/icons/tools30.svg" },
  { category: "Frontend", name: "Gatsby.JS", img: "/assets/icons/tools31.png" },
  { category: "Frontend", name: "Vue JS", img: "/assets/icons/tools32.svg" },
  { category: "UI/UX", name: "Principle", img: "/assets/icons/tools33.svg" },
  { category: "UI/UX", name: "Sketch", img: "/assets/icons/tools34.svg" },
  { category: "UI/UX", name: "AdobeSuite", img: "/assets/icons/tools35.svg" },
  { category: "Testing", name: "YouTrack", img: "/assets/icons/tools36.svg" },
  { category: "Testing", name: "Appium", img: "/assets/icons/tools37.svg" },
  { category: "Testing", name: "Cypress", img: "/assets/icons/tools39.svg" },
  { category: "Testing", name: "Jmeter", img: "/assets/icons/tools40.svg" },
  { category: "Backend", name: "MongoDB", img: "/assets/icons/tools41.svg" },
  { category: "Backend", name: "Cassandra", img: "/assets/icons/tools42.svg" },
  { category: "Frontend", name: "Sass", img: "/assets/icons/tools43.svg" },
  {
    category: "Frontend",
    name: "MaterialUI",
    img: "/assets/icons/tools44.svg",
  },
  { category: "UI/UX", name: "Zeplin", img: "/assets/icons/tools45.svg" },
  { category: "UI/UX", name: "Illustrator", img: "/assets/icons/tools46.svg" },
  { category: "UI/UX", name: "Lottie", img: "/assets/icons/tools40.svg" },
  { category: "UI/UX", name: "Photoshop", img: "/assets/icons/tools47.svg" },
];

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    "Frontend",
    "Backend",
    "DevOps",
    "Testing",
    "UI/UX",
    "Infrastructure",
    "Mobile",
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  return (
    <div id="tools" className="bg-blue-50">
      <div className="container mx-auto">
        <div className="py-24">
          <h4 className="text-[32px] md:text-[40px] text-blue-600 font-bold text-start">
            Tools
          </h4>
          <div className="py-5">
            <div className="flex flex-wrap justify-start items-start gap-4">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() => handleCategoryClick(category)}
                >
                  <span
                    className={`w-[20px] h-[20px] border border-blue-600 rounded-full transition duration-300 ease-in-out ${
                      activeCategory === category
                        ? "bg-blue-600"
                        : "hover:bg-blue-600"
                    }`}
                  ></span>
                  <span className="text-[16px] md:text-[18px] font-medium text-gray-800">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>
          {/* tools */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-2 py-5">
            {tools.map((tool) => (
              <span
                key={tool.name}
                className={`p-5 rounded-lg flex flex-col justify-center items-center gap-2 ${getCategoryColor(
                  tool.category
                )} ${
                  tool.category === activeCategory
                    ? "border-2 border-red-600 -m-1"
                    : ""
                }`}
              >
                <img
                  src={tool.img}
                  className="w-[30px] h-[30px]"
                  alt={tool.category}
                />
                <p className="text-[12px] md:text-[14px] text-gray-800 font-medium">
                  {tool.name}
                </p>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const getCategoryColor = (category) => {
  switch (category) {
    case "Frontend":
      return "bg-violet-300";
    case "Backend":
      return "bg-green-200";
    case "DevOps":
      return "bg-blue-300";
    case "Testing":
      return "bg-violet-300";
    case "UI/UX":
      return "bg-violet-200";
    case "Infrastructure":
      return "bg-blue-100";
    case "Mobile":
      return "bg-blue-200";
    default:
      return "";
  }
};

export default Tools;

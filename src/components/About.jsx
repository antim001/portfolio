import React, { useState } from "react";
import logo3 from '../assets/logo3.jpg';
import logo2 from '../assets/logo2.jpeg';
import logo1 from '../assets/logo3.png';

const About = () => {
  const [activeTab, setActiveTab] = useState("Education");
  const [openEducation, setOpenEducation] = useState({
    university: false,
    college: false,
  });
  const [openExperience, setOpenExperience] = useState({
    internship: false,
  });

  const toggleEducation = (key) => {
    setOpenEducation((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleExperience = (key) => {
    setOpenExperience((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="mt-8 pb-8"> {/* Adjusted margin-top */}
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
          <p className="text-xl mt-10">
            Hey there, I'm Antim, a Computer Science and Engineering graduate from IUBAT. I've got a knack for coding and love diving into new technologies. My projects reflect my passion for problem-solving and creativity. I'm always eager to learn and grow, and I'm ready to bring my skills to the table to tackle any challenge that comes my way. Let's make some tech magic together!
          </p>
          <br />
          <h2 className="text-xl font-bold inline border-b-4 border-gray-500">Details</h2>

          {/* Tab Menu */}
          <div className="flex space-x-4 mt-8 relative">
            <button
              className={`relative px-4 py-2 transition duration-500 ease-in-out transform ${
                activeTab === "Education"
                  ? "bg-gray-700 text-white"
                  : "bg-gray-600 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("Education")}
            >
              Education
              {activeTab === "Education" && (
                <span className="absolute left-0 bottom-0 w-full h-1 bg-gray-500 rounded-full animate-slide-in"></span>
              )}
            </button>
            <button
              className={`relative px-4 py-2 transition duration-500 ease-in-out transform ${
                activeTab === "Experience"
                  ? "bg-gray-700 text-white"
                  : "bg-gray-600 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("Experience")}
            >
              Experience
              {activeTab === "Experience" && (
                <span className="absolute left-0 bottom-0 w-full h-1 bg-gray-500 rounded-full animate-slide-in"></span>
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-6 transition-all duration-700 ease-in-out transform">
            {activeTab === "Education" && (
              <div className="animate-fade-in">
                {/* Tree Structure for Education */}
                <div className="mb-4">
                  <button
                    className="flex items-center justify-between w-full p-2 bg-gray-700 text-white rounded-lg"
                    onClick={() => toggleEducation("university")}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={logo3}
                        alt="IUBAT Logo"
                        className="h-10 w-10 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                      />
                      <span>International University of Business Agriculture & Technology (IUBAT)</span>
                    </div>
                    <span>{openEducation.university ? "▼" : "►"}</span>
                  </button>
                  {openEducation.university && (
                    <div className="ml-8 mt-2 space-y-2">
                      <p className="text-gray-300">Bachelor of Computer Science and Engineering (BCSE)</p>
                      <p className="text-gray-400">Graduation Year: 2024</p>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    className="flex items-center justify-between w-full p-2 bg-gray-700 text-white rounded-lg"
                    onClick={() => toggleEducation("college")}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={logo2}
                        alt="AKMCC Logo"
                        className="h-10 w-10 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                      />
                      <span>Abdul Kadir Mollah City College (AKMCC)</span>
                    </div>
                    <span>{openEducation.college ? "▼" : "►"}</span>
                  </button>
                  {openEducation.college && (
                    <div className="ml-8 mt-2 space-y-2">
                      <p className="text-gray-300">Higher Secondary Certificate (HSC) - Science</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "Experience" && (
              <div className="animate-fade-in">
                {/* Tree Structure for Experience */}
                <div className="mb-4">
                  <button
                    className="flex items-center justify-between w-full p-2 bg-gray-700 text-white rounded-lg"
                    onClick={() => toggleExperience("internship")}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={logo1}
                        alt="Internship Logo"
                        className="h-10 w-10 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                      />
                      <span>Backend Developer (Intern) at Easca Solutions Limited</span>
                    </div>
                    <span>{openExperience.internship ? "▼" : "►"}</span>
                  </button>
                  {openExperience.internship && (
                    <div className="ml-8 mt-2 space-y-2">
                      <p className="text-gray-300">Worked on backend development projects, utilizing Node.js and Express for building APIs.</p>
                      <p className="text-gray-400">Duration: June 2024 - September 2024</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

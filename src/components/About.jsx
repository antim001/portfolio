import React from "react";
import logo3 from '../assets/logo3.jpg'
import logo2 from '../assets/logo2.jpeg'
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="mt-56 sm:mt-80 pb-8  md:mt-40 lg:mt-9"> {/* Adjusted margin-top value */}
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
          <p className="text-xl mt-10">
            
          Hey there, I'm Antim, a Computer Science and Engineering graduate from IUBAT. I've got a knack for coding and love diving into new technologies. My projects reflect my passion for problem-solving and creativity. I'm always eager to learn and grow, and I'm ready to bring my skills to the table to
           tackle any challenge that comes my way. Let's make some tech magic together!
          </p>

          <br />
<h2 className='text-xl font-bold inline border-b-4 border-gray-500 '>Education</h2>
          <div>
          <div className="flex items-center space-x-4 space-y-4">
      <img src={logo3} alt="IUBAT Logo" className="h-16 w-16 mt-2 rounded-full transition duration-300 ease-in-out transform hover:scale-110" />
      <div>
        
        <p className="text-gray-600">International University of Business Agriculture & Technology (BCSE)</p>
      </div>
    </div>
    <div className="flex items-center space-x-4 space-y-4">
      <img src={logo2} alt="IUBAT Logo" className="h-16 w-16 mt-2 rounded-full transition duration-300 
      ease-in-out transform hover:scale-110" />
      <div>
        
        <p className="text-gray-600">Abdul Kadir Mollah City College (HSC)</p>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

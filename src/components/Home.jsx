import { useTypewriter, Cursor } from 'react-simple-typewriter';
import HeroImage from "../assets/heroImage.png";
import Antim from '../assets/antim.png'

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["web developer", "software engineer", "problem solver"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4 lg:items-center">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full text-center md:text-left mt-20 sm:mt-32  lg:mt-80 md:mt-36 w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            I'm a <br /> <span>{typeEffect}</span>
            <Cursor />
          </h2>
          <p className="text-gray-500 py-4 max-w-md mx-auto md:mx-0">
            I have 3 years of experience building and designing software.
            Currently, I love to work on web applications using technologies like
            React, Tailwind, Next.js, and Node.js.
          </p>

          <div className="mt-4">
            <a 
              href="/Antim_Sarker_Resume.pdf"
              download
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mx-auto md:mx-0"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0 flex justify-center w-full md:w-1/2">
  <div className="relative w-3/4 sm:w-2/3 lg:w-full max-w-[500px]">
    {/* Glowing Arms */}
    <div className="absolute inset-0 flex justify-center items-center">
      {/* Top Arm */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-2 w-32 bg-blue-500 rounded-full animate-pulse-blur"></div>
      {/* Bottom Arm */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-2 w-32 bg-blue-500 rounded-full animate-pulse-blur"></div>
      {/* Left Arm */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-32 bg-blue-500 rounded-full animate-pulse-blur"></div>
      {/* Right Arm */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-32 bg-blue-500 rounded-full animate-pulse-blur"></div>
    </div>
    {/* Image */}
    <div className="relative rounded-2xl p-2 shadow-2xl">
      <img
        src={Antim}
        alt="my profile"
        className="rounded-2xl w-full h-auto object-contain"
      />
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Home;


import { useTypewriter, Cursor } from 'react-simple-typewriter';
import HeroImage from "../assets/heroImage.png";



const Home = () => {
  const [typeEffect]=useTypewriter({
    words:["web developer","software engineer","problem solver"],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40
  })

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="mt-64 flex flex-col justify-center h-full md:mt-20 sm:mt-10">
          <h2 className="text-4xl sm:text-7xl lg:text-6xl font-bold lg:mr-3 text-white">
            I'm a <br /> <span>{typeEffect}</span>
            <Cursor />
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 3 years of experience building and designing software.
            Currently, I love to work on web applications using technologies like
            React, Tailwind, Next.js, and Node.js.
          </p>

          <div>
          <a 
  href="/Antim_Sarker_Resume.pdf"
  download
  target="_blank" 
  rel="noopener noreferrer"
  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
>
    Download Resume
    
  </a>
</div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;


import {FaGithub,FaLinkedin} from 'react-icons/fa';


const Contact = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white "
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="mt-34 md:mt-24 lg:mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/lbkolnjb"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email" required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      <div className='flex mt-10 mx-auto gap-5'>
        <a href="https://www.linkedin.com/in/antim-sarker-6a982a240/"target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='text-4xl'></FaLinkedin>
        </a>
       <a href="https://github.com/antim001"target="_blank" rel="noopener noreferrer">
       <FaGithub className='text-4xl'></FaGithub>
       </a>
      </div>
      <footer className="text-center py-4 text-gray-500">
      <p>
        &copy; Antim {currentYear}. All rights reserved.
      </p>
    </footer>
      </div>
     
    </div>
    
  );
};

export default Contact;
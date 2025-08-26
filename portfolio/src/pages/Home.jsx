import Typewriter from 'typewriter-effect';
import profileImg from '../assets/profile.jpg';

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mx-auto px-6 md:px-16 py-12 min-h-screen">
    {/* Text side */}
    <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Hi, I'm Aman Singh 👋
        </h1>
        <p className="text-xl text-gray-300 mb-6">
        Avid Coder & Problem Solver
        </p>
        <div className="flex justify-center md:justify-start gap-4">
        <a href="/resume.pdf" className="bg-blue-500 text-white px-4 py-2 rounded">Download Resume</a>
        <a href="https://github.com/..." className="text-blue-400 hover:underline">GitHub</a>
        <a href="https://linkedin.com/..." className="text-blue-400 hover:underline">LinkedIn</a>
        </div>
    </div>

    {/* Image side */}
    <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
        <img
        src={profileImg}
        alt="Aman Singh"
        className="w-48 h-48 rounded-full border-4 border-blue-500 object-cover"
        />
    </div>
    </section>
  );
}



export default Home;

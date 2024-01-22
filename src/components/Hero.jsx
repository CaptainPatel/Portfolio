import { Madara } from "./canvas"
import { styles } from "../styles";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-indigo-600'>Captain</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Full fledged MERN applications, <br className='sm:block hidden' />
            with robust features.
          </p>
          <button className="flex justify-center w-75 mt-6">
            <div className="bg-indigo-600 text-white font-semibold hover:bg-indigo-500 rounded-lg p-3" onClick={() => {
              window.open("https://drive.google.com/file/d/1-li1jFUvJ9bD9aFf3_xIAYH9D2XMyp3U/view?usp=drive_link");
            }}>
              Download My CV
            </div>
          </button>
        </div>
        <div id="madara" className="hidden lg:block" style={{ position: "relative", zIndex: 10, bottom: "6rem", left: "1rem" }} >
          <Madara />
        </div>
      </div>

    </section>
  );
};

export default Hero;

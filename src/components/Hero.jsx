import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[110px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
            <h1 className={`${styles.heroHeadText} text-stone-50`}>Hi, I&apos;m
              <span className="text-[#915eff]"> Nusaif </span>
            </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications<br className="sm:block hidden"/>that are fast, elegant, and user-friendly.
          </p>
          <div className="mt-5 flex flex-row flex-wrap gap-4 z-10 relative">
            <a
              href="/Mohammed_Nusaif_Resume.pdf"
              download="Mohammed_Nusaif_Resume.pdf"
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 border border-violet-400/20"
            >
              <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-nusaif/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#151030]/60 backdrop-blur-sm hover:bg-[#151030] text-white font-bold py-3 px-6 rounded-xl border border-secondary/30 shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 hover:border-[#915eff]/50"
            >
              <svg className="w-5 h-5 fill-current text-[#0077b5]" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-start ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center item-start p-2">
            <motion.div
              animate={{ y:[0,24,0]}}
              transition=
              {{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1" />

          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
import { motion } from 'framer-motion'
import React from 'react'
import { styles } from '../styles'
import { fadeIn } from '../utilis/motion'
import { services } from '../constants'
import { Tilt } from 'react-tilt'
import { SectionWrapper } from '../HOC'

const ServiceCard = ({ index , title, icon }) => {
    return (
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div variants={fadeIn("right","spring", index*0.5, 0.75)} 
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div 
              options={{
                max: 45,
                scale:1,
                speed:450,
               }}
              className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
              <img src={icon} alt= 'web-development' className='w-16 h-16 object-contain'/>
              <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
            </div>
          </motion.div>
      </Tilt>
    )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className= {styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1,1)}
        className='mt-4 text-secondary text-[21px] max-w-3xl leading-[30px]'
      >
        I build modern web applications that are intuitive, scalable, and designed for real users. With hands-on experience in Angular, React, .NET, JavaScript, TypeScript, and Node.js, I enjoy transforming ideas into reliable software with clean architecture and exceptional user experiences.
        <br /><br />
        Over the years, I&apos;ve worked on enterprise applications, developed reusable UI components, integrated REST APIs, optimized application performance, and implemented AI-powered capabilities including intelligent content summarization, translation, and text enhancement. I believe great software is not just functional—it should also be maintainable, performant, and enjoyable to use.
        <br /><br />
        Driven by curiosity and continuous learning, I&apos;m always exploring new technologies, development patterns, and AI-driven solutions to create applications that solve meaningful problems. Whether it&apos;s crafting seamless frontend experiences or building robust backend services, I strive to deliver software that&apos;s both elegant and impactful.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
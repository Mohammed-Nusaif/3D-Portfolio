import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { SectionWrapper } from '../HOC'
import { styles } from '../styles'
import { slideIn } from '../utilis/motion.js'
import EarthCanvas from './canvas/Earth'


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({
    show: false,
    status: 'success', // 'success' or 'error'
    message: ''
  });

  const handleChange = (e) => {
     const { name, value } = e.target;

     setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.send(
      'service_bvj8z8r',
      'template_ymaydr8',
      {
        name: form.name,
        to_name: 'Nusaif',
        email:form.email,
        to_email: 'nsf.ibn.sathar@gmail.com',
        message: form.message,
      },
      'ff7QbvyBYVhP0HyrG'
    )
    .then(() => {
      setLoading(false);
      setPopup({
        show: true,
        status: 'success',
        message: 'Thank you. I will get back to you as soon as possible.'
      });
      setForm({
        name: '',
        email: '',
        message: '',
      });
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
      setPopup({
        show: true,
        status: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    });
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden relative'>
      <motion.div
        variants={slideIn('left','tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8' 
        >
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'> Your Name</span>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange ={handleChange}
            placeholder="what's your name ?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'> Your Email</span>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="what's your email ?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'> Your Message</span>
          <textarea
            rows="7"
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder="what do you want to say ?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
        </label>
            
        <button
          type='submit'
          className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-primary rounded-xl'
        >
          {loading ? 'Sending...' : 'send'}
        </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>

      {/* Custom Popup Modal */}
      <AnimatePresence>
        {popup.show && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-tertiary p-8 rounded-2xl border border-[#915eff]/30 shadow-card max-w-md w-full mx-4 text-center flex flex-col items-center gap-4"
            >
              {popup.status === 'success' ? (
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/30">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/30">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              )}
              
              <h3 className="text-white font-bold text-[24px]">
                {popup.status === 'success' ? 'Success!' : 'Oops!'}
              </h3>
              <p className="text-secondary text-[16px] leading-[24px]">
                {popup.message}
              </p>
              
              <button
                onClick={() => setPopup({ ...popup, show: false })}
                className="mt-2 bg-[#915eff] hover:bg-[#804df0] text-white py-2.5 px-8 rounded-xl font-bold shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Okay
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
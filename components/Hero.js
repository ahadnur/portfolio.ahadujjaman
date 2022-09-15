import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import Lottie from 'lottie-react'
import animation from '../constants/animation2.json'


const Hero = () => {

  return (
    <div className="w-full h-screen flex items-center relative">
        <div className="content z-10">
            <span className="text-main font-mono md:text-base">Hi, my name is</span>
            <motion.div className="mt-5" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once: true}}>
                <h1 className="text-4xl font-bold text-white/90 sm:text-5xl md:text-6xl lg:text-[80px]">Ahadujjaman Nur.</h1>
                <h2 className="text-4xl font-bold text-white/60 sm:text-5xl md:text-6xl lg:text-[80px]">I build things for the web.</h2>
            </motion.div>
            <p className="text-white/60 w-full md:w-[570px] my-5 md:my-8 lg:my-10">I am a Freelance Web developer specialized in Frontend development <span className="text-main">(Design and Develop)</span> and Programming Coach <span className="text-main"> (Python, Javascript, Web design and development)</span>. Currently I&apos;m focusing on serving web solutions at <span className="text-main"><Link href="https://www.fiverr.com/ahadnur44?public_mode=true">Fiverr</Link></span>, <span className="text-main"><Link href="https://www.upwork.com/freelancers/~01ba501685672fd7a0?viewMode=1">Upwork</Link></span> </p>
            <button className="mt-5 py-3 px-5 border-[1px] border-main rounded-md text-main hover:bg-main/10 transition-all duration-300">
                <Link href="https://psylab.teachable.com/p/beginners-javascript-guide" >
                    <a target="_blank">Check out my JavaScript Course</a>
                </Link>
            </button>
        </div>
        <div className="anim 2xl:w-4/5  absolute top-1/2 -translate-y-1/2 left-1/2 md:right-0">
          <Lottie animationData={animation} loop={true} />
        </div>
    </div>
  )
}

export default Hero
import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
        <div className="content">
            <span className="text-main font-mono md:text-base">Hi, my name is</span>
            <div className="mt-5">
                <h1 className="text-4xl font-bold text-white/90 sm:text-5xl md:text-6xl lg:text-[80px]">Ahadujjaman Nur.</h1>
                <h2 className="text-4xl font-bold text-white/60 sm:text-5xl md:text-6xl lg:text-[80px]">I build things for the web.</h2>
            </div>
            <p className="text-white/60 w-full md:w-[570px] my-5 md:my-8 lg:my-10">I am a Freelance Web developer specialized in Frontend development <span className="text-main">(Design and Develop)</span> and Programming Coach <span className="text-main"> (Python, Javascript, Web design and development)</span>. Currently I&apos;m focusing on serving web solutions at <span className="text-main">Fiverr</span>, <span className="text-main">Upwork</span> </p>
            <button className="mt-5 py-3 px-5 border-[1px] border-main rounded-md text-main hover:bg-main/10 transition-all duration-300">
                <Link href="https://github.com">
                    <a>Check out my course</a>
                </Link>
            </button>
        </div>
    </div>
  )
}

export default Hero
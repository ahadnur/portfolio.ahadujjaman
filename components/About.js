import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className="py-20">
        <h2 className="font-mono text-main relative after:absolute after:top-1/2 after:-translate-y-1/2 after:ml-5 after:h-[1px] after:w-1/3 md:after:w-2/4 lg:after:w-2/5 xl:after:w-1/4 2xl:after:w-1/4 after:bg-white/30 after:rounded-full text-xl">01. <span className="text-white/90 text-4xl font-bold">About me</span></h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 content-start place-items-center">

            <div className="mb-10 md:mb-0">
                <p className="text-white/60 mb-3">Hello! My name is Ahadujjaman Nur and I enjoy creating things that live on the internet. My interest in web development started back in 2016 when I was learning PYTHON. After all these years that interest helped me learn HTML, CSS, JAVASCRIPT, PYTHON a lot!</p>
                <p className="text-white/60 mb-3">Past few years I'm working as a Freelance Web Developer and Programming Coach in <span className="text-main"><Link href="https://www.fiverr.com/ahadnur44?public_mode=true">Fiverr</Link></span>, <span className="text-main"><Link href="https://www.upwork.com/freelancers/~01ba501685672fd7a0?viewMode=1">Upwork</Link></span></p>
                <p className="text-white/60 mb-3">My main focus these days is building User Friendly, professional products and digital services for a variety of clients.</p>
            </div>
            <div className="relative h-[300px] w-[300px]">
                <Image src="/img/ahadnur44.jpg" alt="Ahadujjaman Nur" width={300} height={300} className="rounded-md sepia hover:sepia-0  transition-all duration-3000 z-10" />
                <div className="border-2 border-main h-full w-full absolute top-4 left-4 rounded-md"></div>
            </div>

            <div>

            </div>

        </div>
    </div>
  )
}

export default About
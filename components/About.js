import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { BsArrowRightShort } from 'react-icons/bs'

const About = () => {
  return (
    <div id="about" className="py-20">
        <h2 className="font-mono text-main relative after:absolute after:top-1/2 after:-translate-y-1/2 after:ml-5 after:h-[1px] after:w-1/3 md:after:w-2/4 lg:after:w-2/5 xl:after:w-1/4 2xl:after:w-1/4 after:bg-white/30 after:rounded-full text-xl">01. <span className="text-white/90 text-4xl font-bold">Who Am I?</span></h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 content-start place-items-center">

            <div className="mb-10 md:mb-0">
                <p className="text-white/60 mb-3">Hello! My name is Ahadujjaman Nur and I enjoy creating things that live on the internet. My interest in web development started back in 2016 when I was learning PYTHON. After all these years that interest helped me learn HTML, CSS, JAVASCRIPT a lot!</p>
                <p className="text-white/60 mb-3">Past few years I&apos;m working as a Freelance Web Developer and Programming Coach in <span className="text-main"><Link href="https://www.fiverr.com/ahadnur44?public_mode=true">Fiverr</Link></span>, <span className="text-main"><Link href="https://www.upwork.com/freelancers/~01ba501685672fd7a0?viewMode=1">Upwork</Link></span></p>
                <p className="text-white/60 mb-3">My main focus these days is building User Friendly, professional products and digital services for a variety of clients.</p>
                <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                    <div className="flex flex-col justify-start items-start">
                        <h3 className="text-xl font-extralight text-main mb-2">Languages</h3>
                        <ul>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>Html</span></li>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>Css/Scss</span></li>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>Javascript</span></li>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>React Js</span></li>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>Next Js</span></li>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>Tailwindcss</span></li>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>Python</span></li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <h3 className="text-xl font-extralight text-main mb-2">Frameworks</h3>
                        <ul>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>React Js</span></li>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>Next Js</span></li>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>Node Js</span></li>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>Django</span></li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <h3 className="text-xl font-extralight text-main mb-2">Tools</h3>
                        <ul>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>Bash</span></li>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>Git & github</span></li>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>Postman</span></li>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>Sanity</span></li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <h3 className="text-xl font-extralight text-main mb-2">Design</h3>
                        <ul>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>Wireframe</span></li>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>Prototype</span></li>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>Adobe XD</span></li>
                            <li className="flex items-center text-white/60"><BsArrowRightShort /><span>Figma</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            
            <div className="relative h-[300px] w-[300px]">
                <Image src="/img/ahadnur44.jpg" alt="Ahadujjaman Nur" width={300} height={300} className="rounded-md sepia hover:sepia-0  transition-all duration-3000 z-10" />
                <div className="border-2 border-main h-full w-full absolute top-4 left-4 rounded-md"></div>
            </div>

        </div>
    </div>
  )
}

export default About
import React from 'react'
import Link from 'next/link'

import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillFacebook,  } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'


import { noteable_projects} from '../constants/constants'



import Nav from '../components/Nav'

function archive() {
  return (
    <div className="relative mb-24">
        <Nav />
        {/* Right bar on desktop*/}
        <div className="hidden lg:block md:fixed bottom-10 right-10">
               <div className="socialIcons">
                <ul className="flex justify-center items-center flex-col space-y-5">
                    <li className="cursor-pointer h-5 w-5">
                        <Link href="https://www.github.com/ahadnur">
                            <a>
                            <AiFillGithub className="h-full w-full text-white/60 hover:text-main transition-all duration-300 hover:animate-ping" />    
                            </a>
                        </Link>
                    </li>
                    <li className="cursor-pointer h-5 w-5">
                        <Link href="https://www.facebook.com/ahadnur44">
                            <a><AiFillFacebook className="h-full w-full text-white/60 hover:text-main transition-all duration-300 hover:animate-ping" /></a>
                        </Link>
                    </li>
                    <li className="cursor-pointer h-5 w-5">
                        <Link href="https://www.twitter.com/ahadnur44">
                            <a><AiOutlineTwitter className="h-full w-full text-white/60 hover:text-main transition-all duration-300 hover:animate-ping" /></a>
                        </Link>
                    </li>
                    <li className="cursor-pointer h-5 w-5">
                        <Link href="https://t.me/ahadnur44">
                            <a><FaTelegramPlane className="h-full w-full text-white/60 hover:text-main transition-all duration-300 hover:animate-ping" /></a>
                        </Link>
                    </li>
                    <li className="cursor-pointer h-5 w-5">
                        <Link href="https://www.linkedin.com/in/ahadnur44/">
                            <a><AiFillLinkedin className="h-full w-full text-white/60 hover:text-main transition-all duration-300 hover:animate-ping" /></a>
                        </Link>
                    </li>
                    <li>
                        <div className="h-20 w-[1px] bg-white/60"></div>
                    </li>
                    
                    
                </ul>
            </div>
            </div>
            {/* End of right bar */}
        <div className="container mt-28">
            <h2 className="text-6xl font-bold">Archive</h2>
            <p className="text-main font-mono mt-3">List of things that i&apos;ve done</p>

            <div className="mt-20">
                <ul>
                    <li className="flex justify-between items-start">
                        <div className="font-semibold text-white/60 text-xl">Year</div>
                        <div className="font-semibold text-white/60 text-xl ml-10 w-[300px] flex-1">Title</div>
                        <div className="font-semibold text-white/60 text-xl hidden md:block flex-1">Built with</div>
                        <div className="flex justify-end items-end font-semibold text-white/60 text-xl text-left flex-1 ml-5">Link</div>
                    </li>
                    {noteable_projects.map((project) => (
                        <li key={project.id} className="flex justify-between items-center mt-4">
                            <div className="font-semibold py-3 text-main">{project.year}</div>
                            <div className="font-semibold py-3 flex-1 w-[300px] ml-10">{project.title}</div>
                            <div className="font-light py-3 space-x-2 hidden md:block flex-1 font-mono">{project.tags.map(tag => <span className="tags">{tag}</span>)}</div>
                            <div className="flex justify-end items-end text-left space-x-2 flex-1 ml-5">
                                {
                                    project.github.length>10 
                                    ?
                                    <Link href={project.github}>
                                        <a target="_blank"><AiFillGithub className="text-xl hover:text-main" /></a>
                                    </Link>
                                    :
                                    <span></span>

                                }
                                {
                                    project.url.length>10?
                                    <Link href={project.url}>
                                        <a target="_blank"><BiLinkExternal className="text-xl hover:text-main" /></a>
                                    </Link>
                                    :
                                    <span></span>
                                }
                                
                                
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    </div>
  )
}

export default archive
import React from 'react'
import Link from 'next/link'

import { AiFillGithub, AiOutlineFolder } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import {IoMdFolderOpen} from 'react-icons/io'

import {featured_projects, noteable_projects} from '../constants/constants'

const Works = () => {
    console.log(featured_projects)
  return (
    <div id="works" className="mb-10 mt-20">
        <h2 className="font-mono text-main relative after:absolute after:top-1/2 after:-translate-y-1/2  after:h-[1px] after:w-40 after:bg-white/30 after:rounded-full text-md md:text-xl">02. <span className="text-white/90 text-2xl md:text-4xl font-bold after:ml-2">What I&apos;ve Built</span></h2>

        <div className="featuredProject my-20 space-y-20">
            {/* Feature project 1 */}
            <div className="project relative grid grid-cols-10">
                <div className="projectImage row-span-full col-start-1 col-span-10 sm:col-start-1 sm:col-span-6 self-center">
                    <img src={featured_projects[0].image} alt="Feature project 1" className="h-[300px] w-full sm:h-[235px] sm: md:w-[380px] md:h-[255px]  lg:h-[360px] lg:w-full sepia hover:sepia-0 object-cover transition-all duration-1000 rounded-sm" />
                    <div className="h-full w-full bg-gray/90 sm:hidden absolute top-0 left-0"></div>
                </div>
                <div className="content row-span-full col-start-1 sm:col-start-6 col-end-11 sm:col-end-11 sm:text-right self-center p-5 sm:p-0 z-10">
                    <span className="text-main font-mono">Featured Project</span>
                    <h2 className="text-2xl font-bold mb-5">
                        <Link href={featured_projects[0].url}>
                            <a target="_blank">{featured_projects[0].title}</a>
                        </Link>
                    </h2>
                    <p className="p-5 bg-gray rounded-sm text-white/80">{featured_projects[0].description}</p>
                    <div className="tags mt-5">
                        <ul className="flex justify-start sm:justify-end flex-nowrap space-x-2">
                            {featured_projects[0].tags.map((tag, index) => (
                                <li className="text-main font-light text-xs font-mono" key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="links"></div>
                </div>
            </div>

            {/* Feature Project 2 */}
            <div className="project relative grid grid-cols-10">
                
                <div className="content row-span-full col-start-1 sm:col-start-1 col-end-11 sm:col-end-6 sm:text-left self-center p-5 sm:p-0 z-10">
                    <span className="text-main font-mono">Featured Project</span>
                    <h2 className="text-2xl font-bold mb-5">
                        <Link href={featured_projects[1].url}>
                            <a target="_blank">{featured_projects[1].title}</a>
                        </Link>
                    </h2>
                    <p className="p-5 bg-gray rounded-sm text-white/80">{featured_projects[1].description}</p>
                    <div className="tags mt-5">
                        <ul className="flex justify-start flex-nowrap space-x-2">
                            {featured_projects[1].tags.map((tag, index) => (
                                <li className="text-main font-light font-mono text-xs" key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="projectImage row-span-full col-start-1 col-span-10 sm:col-start-5 sm:col-end-11 self-center">
                    <img src={featured_projects[1].image} alt="Feature project 1" className="h-[300px] w-full sm:h-[235px] sm: md:w-[380px] md:h-[255px]  lg:h-[360px] lg:w-full sepia hover:sepia-0 object-cover transition-all duration-1000 rounded-sm" />
                    <div className="h-full w-full bg-gray/90 sm:hidden absolute top-0 left-0"></div>
                </div>
            </div>

            {/* Feature project 3 */}
            <div className="project relative grid grid-cols-10">
                <div className="projectImage row-span-full col-start-1 col-span-10 sm:col-start-1 sm:col-span-6 self-center">
                    <img src={featured_projects[2].image} alt="Feature project 1" className="h-[300px] w-full sm:h-[235px] sm: md:w-[380px] md:h-[255px]  lg:h-[360px] lg:w-full sepia hover:sepia-0 object-cover transition-all duration-1000 rounded-sm" />
                    <div className="h-full w-full bg-gray/90 sm:hidden absolute top-0 left-0"></div>
                </div>
                <div className="content row-span-full col-start-1 sm:col-start-6 col-end-11 sm:col-end-11 sm:text-right self-center p-5 sm:p-0 z-10">
                    <span className="text-main font-mono">Featured Project</span>
                    <h2 className="text-2xl font-bold mb-5">
                        <Link href={featured_projects[2].url}>
                            <a target="_blank">{featured_projects[2].title}</a>
                        </Link>
                    </h2>
                    <p className="p-5 bg-gray rounded-sm text-white/80">{featured_projects[2].description}</p>
                    <div className="tags mt-5">
                        <ul className="flex justify-start sm:justify-end flex-nowrap space-x-2">
                            {featured_projects[2].tags.map((tag, index) => (
                                <li className="text-main font-light text-xs font-mono" key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="links"></div>
                </div>
            </div>
        </div>

        <div className="otherProjects mt-40">
            <div className="text-center">
                <h2 className="text-xl md:text-3xl font-semibold mb-2">Other Noteable Projects</h2>
                <Link href="/archive">
                    <a className="text-main font-mono">view the archive</a>
                </Link>
                <div className="mt-10 text-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                    {noteable_projects.slice(0,6).map((project) =>(
                        <div className="" key={project.id}>
                            <div className="w-full h-[300px] rounded-sm bg-white/10 p-6 shadow-md hover:scale-1 flex flex-col justify-between">
                                <div>
                                    <div className="top flex justify-between ">
                                        <div className="icon">
                                            <IoMdFolderOpen className="text-5xl" />
                                        </div>
                                        <div className="linkIcon flex space-x-3">
                                            <BiLinkExternal className="text-2xl hover:text-main transition-all duration-300 cursor-pointer" />
                                            <AiFillGithub className="text-2xl hover:text-main transition-all duration-300 cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3 className="mt-3 mb-2 text-2xl text-left font-bold">{project.title}</h3>
                                        <p className="text-white/80">{project.description}</p>
                                    </div>
                                </div>
                                <div className="bot">
                                    <div className="tags">
                                        <ul className="flex justify-start flex-nowrap space-x-2">
                                            {project.tags.map((tag, index) => (
                                                <li className="text-main font-light text-xs font-mono" key={index}>{tag}</li>
                                            ))}
                                        </ul>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
                <div className="seeMore mt-10">
                    <Link href="/archive">
                        <a className="py-3 px-5 border-[1px] border-main text-main rounded-md hover:bg-main/10 transition-all duration-300">See More</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works
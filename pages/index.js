import Head from 'next/head'
import Link from 'next/link'

import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillFacebook, AiFillYoutube } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'

import SEO from '@bradgarropy/next-seo'

import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Works from '../components/Works'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <>
        <Head>
            <link rel="icon" href="/favicon.png" />
            <SEO
              title="Ahadujjaman Nur | Web Designer | Developer | Programming Coach"
              description="It's Ahadujjaman Nur a professional Freelance Web Designer and Developer. I offer services in Web Design, Web Development, and Programming. I also offer coaching in HTML, CSS, TailwindCss JavaScript, Python, React, Nextjs. I also offer consulting services in Web Design, Web Development, and Programming with Python."
              keywords={['Website', 'Web development', 'Web design', 'Html', 'CSS', 'Javascript', 'TailwindCss', 'React', 'Nextjs', 'UI/UX', 'Frontend Development', 'Web Service', 'Coaching', 'Teaching', 'Assignment', 'tests']}
            />
        </Head>

        <Nav />
        <div className="relative">
            {/* Right bar on desktop*/}
            <div className="hidden lg:block md:fixed bottom-10 right-10">
               <div className="socialIcons">
                <ul className="flex justify-center items-center flex-col space-y-5">
                    <li className="cursor-pointer h-8 w-8">
                        <Link href="https://www.youtube.com/channel/UCen4h4v9NnDKEHzOvE93BIA">
                            <a target="_blank"><AiFillYoutube className="h-full w-full text-white/60 hover:text-main transition-all duration-300 hover:animate-ping" /></a>
                        </Link>
                    </li>
                    <li className="cursor-pointer h-8 w-8">
                        <Link href="https://www.github.com/ahadnur">
                            <a target="_blank">
                            <AiFillGithub className="h-full w-full text-white/60 hover:text-main transition-all duration-300 hover:animate-ping" />    
                            </a>
                        </Link>
                    </li>
                    <li className="cursor-pointer h-8 w-8">
                        <Link href="https://www.facebook.com/ahadnur44">
                            <a target="_blank"><AiFillFacebook className="h-full w-full text-white/60 hover:text-main transition-all duration-300 hover:animate-ping" /></a>
                        </Link>
                    </li>
                    <li className="cursor-pointer h-8 w-8">
                        <Link href="https://www.twitter.com/ahadnur44">
                            <a target="_blank"><AiOutlineTwitter className="h-full w-full text-white/60 hover:text-main transition-all duration-300 hover:animate-ping" /></a>
                        </Link>
                    </li>
                    <li className="cursor-pointer h-8 w-8">
                        <Link href="https://t.me/ahadnur44">
                            <a target="_blank"><FaTelegramPlane className="h-full w-full text-white/60 hover:text-main transition-all duration-300 hover:animate-ping" /></a>
                        </Link>
                    </li>
                    <li className="cursor-pointer h-8 w-8">
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

            {/* Container */}
            <div className="container">
                <Hero />
                <About />
                <Works />
                <Testimonial />
                <Contact />
                <Footer />
            </div>
            {/* End of container */}

      </div>
    </>
  )
}

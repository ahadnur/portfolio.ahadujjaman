// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'
import SEO from '@bradgarropy/next-seo'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Change your Icon */}
        <link rel="icon" href="/img/logo.svg" />
        <SEO
          title="Web Designer, Developer, and Programming Coach"
          description="It's Ahadujjaman Nur a professional Freelance Web Designer and Developer. I offer services in Web Design, Web Development, and Programming. I also offer coaching in HTML, CSS, TailwindCss JavaScript, Python, React, Nextjs. I also offer consulting services in Web Design, Web Development, and Programming with Python."
          keywords={['Website', 'Web development', 'Web design', 'Html', 'CSS', 'Javascript', 'TailwindCss', 'React', 'Nextjs', 'UI/UX', 'Frontend Development', 'Web Service', 'Coaching', 'Teaching', 'Assignment', 'tests']}
        />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

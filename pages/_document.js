// pages/_document.js
import { Html, Head, Main } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Change your Icon */}
        <link rel="icon" href="/img/logo.svg" />
        
      </Head>
      <body>
        <Main />
      </body>
    </Html>
  )
}
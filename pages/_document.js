// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html className="">
      <Head>
        {/* Change your Icon */}
        <link rel="icon" href="/favicon.png" />
        
      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
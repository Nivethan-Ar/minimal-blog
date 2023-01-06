import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Lexend, Montserrat } from '@next/font/google'

const inter = Inter({ subsets: [ "latin" ], variable: '--font-inter' })

const montserrat = Montserrat({ subsets: [ "latin" ], variable: '--font-montserrat' })

const lexend = Lexend({ subsets: [ 'latin' ],variable:'--font-lexend' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} font-main ${inter.variable} font-sub ${lexend.variable} font-lex `}>
      <Component {...pageProps} />
    </main>)
}

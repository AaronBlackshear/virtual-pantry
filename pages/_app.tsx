import { Layout } from '@/components/Layout'
import { LayoutProvider } from '@/components/Layout/LayoutContext'
import '@/styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import type { AppProps } from 'next/app'
import { Nunito_Sans } from 'next/font/google'

const nunitoSans = Nunito_Sans({ weight: ["300", "400", "600", "700", "800"], subsets: ['latin'], style: ['normal', 'italic'], })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={nunitoSans.className}>
      <UserProvider>
        <LayoutProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LayoutProvider>
      </UserProvider>
    </div>
  )
}
import { Layout } from '@/components/Layout'
import { LayoutProvider } from '@/components/Layout/LayoutContext'
import apolloClient from '@/lib/apollo'
import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { Nunito_Sans } from 'next/font/google'

const nunitoSans = Nunito_Sans({ weight: ["300", "400", "600", "700", "800"], subsets: ['latin'], style: ['normal', 'italic'], })


interface Props {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <title>Virtual Pantry</title>
      </head>

      <div className={nunitoSans.className}>
        <ApolloProvider client={apolloClient}>
          <UserProvider>
            <LayoutProvider>
              <Layout>
                {children}
              </Layout>
            </LayoutProvider>
          </UserProvider>
        </ApolloProvider>
      </div>
    </html>
  )
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {ApolloProvider} from "@apollo/client/react";
import apolloClient from "@/lib/apolloClient";
//import ForgeLayout from "@/components/layout/ForgeLayout";
import {SessionProvider} from "next-auth/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps}/>
      </ApolloProvider>
    </SessionProvider>
  )
}

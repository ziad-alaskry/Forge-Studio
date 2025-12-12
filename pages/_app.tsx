import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ForgeLayout from "@/components/layout/ForgeLayout";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ForgeLayout>
      <Component {...pageProps}/>
    </ForgeLayout>
  )
}

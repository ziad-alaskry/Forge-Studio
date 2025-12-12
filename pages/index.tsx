import Head from 'next/head' 
import ForgeHero from '@/components/hero/ForgeHero'
export default function Home() {
  return (
    <>
      <Head>
        <title>Forge Studio</title>
      </Head>
      <ForgeHero/>
    </>
  )
}
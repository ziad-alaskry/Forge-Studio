import Head from 'next/head' 
import ForgeHero from '@/components/hero/ForgeHero'
import ForgeServices from '@/components/ui/sections/ForgeServices'
import ForgePortfolio from '@/components/ui/sections/ForgePortfolio'
import ForgePhilosophy from '@/components/ui/sections/ForgePhilosophy'
export default function Home() {
  return (
    <>
      <Head>
        <title>Forge Studio</title>
      </Head>
      <ForgeHero/>
      <ForgePhilosophy/>
      <ForgeServices/>
      <ForgePortfolio/>
    </>
  )
}
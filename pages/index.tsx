import Head from 'next/head' 
import ForgeHero from '@/components/hero/ForgeHero'
import ForgeServices from '@/components/ui/sections/ForgeServices'
import ForgePortfolio from '@/components/ui/sections/ForgePortfolio'
import ForgePhilosophy from '@/components/ui/sections/ForgePhilosophy'
import ForgeProcess from '@/components/ui/sections/ForgeProcess'
import ForgeCTA from '@/components/ui/sections/ForgeCTA'
import ForgeNavbar from '@/components/layout/ForgeNavbar'
import PricingSection from '@/components/ui/sections/PricingSection'
export default function Home() {
  return (
    <>
      <Head>
        <title>Forge Studio</title>
      </Head>
      <ForgeHero/>
      <ForgeNavbar/>
      <ForgeServices/>
      <ForgePortfolio/>
      <ForgeProcess/>
      <PricingSection/>
      <ForgeCTA/>
      {/*<ForgePhilosophy/> */}
    </>
  )
}
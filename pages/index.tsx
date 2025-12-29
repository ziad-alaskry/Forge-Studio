import Head from 'next/head' 
import ForgeHero from '@/components/hero/ForgeHero'
import ForgeServices from '@/components/ui/sections/ForgeServices'
import ForgePortfolio from '@/components/ui/sections/ForgePortfolio'
import ForgePhilosophy from '@/components/ui/sections/ForgePhilosophy'
import ForgeProcess from '@/components/ui/sections/ForgeProcess'
import ForgeCTA from '@/components/ui/sections/ForgeCTA'
import ForgeNavbar from '@/components/layout/ForgeNavbar'
import PricingSection from '@/components/ui/sections/PricingSection'
import { useContactModal } from "@/hooks/useContactModal";
import ForgeContactModal from '@/components/ui/ForgeContactModal'
import { useState } from 'react'
export default function Home() {

  const contactModal = useContactModal()

  return (
    <>
      <Head>
        <title>Forge Studio</title>
      </Head>
      <ForgeHero onOpenContact={contactModal.open}/>
      <ForgeServices/>
      <ForgePortfolio/>
      <ForgeProcess/>
      <PricingSection onSelectBundle={(bundleId) => contactModal.open(bundleId)}/>
      <ForgeCTA onOpenContact={contactModal.open}/>
      <ForgeContactModal
        isOpen={contactModal.isOpen}
        onClose={contactModal.close}
        selectedBundle={contactModal.selectedBundle}
      />
      {/*<ForgePhilosophy/> */}
    </>
  )
}
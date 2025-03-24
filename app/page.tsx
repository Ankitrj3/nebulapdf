import React from 'react'
import HeroSection from '@/components/home/hero-section'
import DemoSection from '@/components/home/demo-section'
import HowItWorkSection from '@/components/home/how-it-work-section'
export default function Home() {
  return (
    <main>
      <HeroSection />
      <DemoSection />
      <HowItWorkSection />
    </main>
  )
}
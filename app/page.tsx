import React from 'react'
import dynamic from 'next/dynamic'

const HeroSection = dynamic(() => import('@/components/home/hero-section'))
const DemoSection = dynamic(() => import('@/components/home/demo-section'))
const HowItWorkSection = dynamic(() => import('@/components/home/how-it-work-section'))

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DemoSection />
      <HowItWorkSection />
    </main>
  )
}
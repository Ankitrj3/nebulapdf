import React from 'react'
import { Button } from '../ui/button'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

function HeroSection() {
  return (
     <section className="py-20 px-6">
        <div className="container mx-auto text-center space-y-6">
            <Badge variant="outline" className="mb-4 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 transition-all duration-1000 animate-pulse px-4 py-2">
                <Sparkles className='w-4 h-4 mr-2 text-white animate-spin-slow' />
                <p className='text-white font-medium'>Powered by AI</p>
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Transform PDF into{' '}
                <span className="relative inline-block">
                    <span className="relative z-10">concise</span>
                    <span className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1"></span>
                </span>{' '}
                Summaries
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
                Summarize your PDFs with NebulaPDF within seconds
            </h2>
            
        </div>
     </section>
  )
}

export default HeroSection
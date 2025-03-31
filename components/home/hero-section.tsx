'use client'
import React from 'react'
import { UploadFile } from '../upload-file'
import Image from 'next/image'

export function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-rose-100/20">
      <div className="mx-auto max-w-7xl pb-16 pt-8 sm:pb-24 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-24">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Transform Your PDFs with AI
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Upload your PDF files and get instant summaries, insights, and analysis powered by advanced AI technology.
              </p>
              <div className="mt-8">
                <UploadFile />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 sm:mt-20 md:mx-auto md:max-w-xl lg:mx-0 lg:mt-0">
          <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl ring-1 ring-gray-900/10 md:-mr-20 lg:-mr-36" aria-hidden="true" />
          <div className="shadow-lg md:rounded-3xl">
            <div className="relative bg-white px-4 pt-4 sm:pt-8 md:pl-12 md:pr-0">
              <div className="mx-auto max-w-xl md:mx-0 md:max-w-none">
                <div className="overflow-hidden rounded-tl-xl bg-gray-900">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-3 py-1.5 text-white">
                        PDF Preview
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pt-3 pb-6">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/ai.png"
                        alt="AI PDF Analysis"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
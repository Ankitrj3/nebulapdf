'use client'
import React from 'react'
import { UploadFile } from '../upload-file'

export function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-rose-100/20">
      <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Transform Your PDFs with AI
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Upload your PDF files and get instant summaries, insights, and analysis powered by advanced AI technology.
              </p>
              <div className="mt-10">
                <UploadFile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
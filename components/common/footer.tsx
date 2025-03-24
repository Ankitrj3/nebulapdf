import React from 'react'

function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="text-center text-gray-600">
          © {new Date().getFullYear()} NebulaPDF. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
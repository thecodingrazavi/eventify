import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href="/">
          <p className="text-3xl font-bold">
            <span className='text-blue-800'>Ev</span>
            <span className='text-blue-700'>en</span>
            <span className='text-blue-600'>ti</span>
            <span className='text-blue-500'>fy</span>
          </p>
        </Link>
        <p>2023 Eventify. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
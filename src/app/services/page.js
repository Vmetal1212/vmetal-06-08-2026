import React from 'react'
import axios from 'axios'
import Services from './Services'
export const dynamic = 'force-static'

export const metadata = {
  title: 'V Metal: Comprehensive Steel Service Provider – CTL, Slitting, and More',
  description: 'Discover our range of steel services, including cut to length, slitting, profiling, and corrugation. V Metal Solutions ensures precision and high quality tailored to meet project requirements across Gujarat and nearby states.',
  alternates: {
    canonical: '/services/',
  }
}

const page = async () => {

  return (
    <>
      <Services />
    </>
  )
}

export default page;

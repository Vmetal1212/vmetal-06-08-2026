import React from 'react'
import About from './About'

export const metadata = {
  title: 'About V Metal Solutions | Leading Steel Distributor in Gujarat',
  description: 'Learn about V Metal Solutions, a trusted steel distributor in Gujarat and nearby states, offering products from JSW, AM/NS, POSCO, and SAIL. Your partner for quality steel solutions.',
  alternates: {
    canonical: '/about/',
  }
}


const page = () => {
  return (
    <>
      <About />
    </>
  )
}

export default page

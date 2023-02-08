import React from 'react'
import { Herosection } from './home-comp/Herosection'
import Sponsors from './Sponsors/Sponsors'

export default function HomePage() {
  return (
    <div className='HomePage'>
      <>
      <Herosection/>
      <Sponsors/>
      </>
    </div>
  )
}

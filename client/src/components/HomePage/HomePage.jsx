import React from 'react'
import { Herosection } from './home-comp/Herosection'
import PastEvents from './home-comp/PastEvents'
import UpcomingEvent from './home-comp/UpcomingEvent/UpcomingEvent'
import Sponsors from './Sponsors/Sponsors'

export default function HomePage() {
  return (
    <div className='HomePage container  '>
      <>
      {/* <Herosection/> */}
      <PastEvents/>
      <UpcomingEvent/>
      <Herosection/>
      <Sponsors/>
      </>
    </div>
  )
}

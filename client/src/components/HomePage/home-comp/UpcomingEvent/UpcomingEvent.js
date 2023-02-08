import React from 'react'
import UpcomingEventComp from './UpcomingEventComp'
import { Data } from './Data'
export default function UpcomingEvent() {
  return (
    <div className='my-2'>
      <h1>Upcoming Events</h1>
      <div className='d-flex row text-center justify-content-center align-items-center'>
        {
            Data.map((elem,key)=>{
            return <UpcomingEventComp idx={key}/>
            })
        }
      </div>
    </div>
  )
}

import React from 'react'
import UpcomingEventComp from './UpcomingEventComp'
import { Data } from './Data'
import NewUpcomComp from './NewUpcomComp'
export default function UpcomingEvent() {
  return (
    <div className='my-2'>
      <h1>Upcoming Events</h1>
      <div className='row d-flex text-center justify-content-center'>


        {
          Data.map((elem, key) => {
            return <div className=' d-flex col-lg-4 col-10  justify-content-center  text-center'>
              <NewUpcomComp />
            </div>
          })
        }
      </div>

    </div>
  )
}

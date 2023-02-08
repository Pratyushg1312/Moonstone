import React from 'react'
import './PastEvents.css'
export default function PastEventComponent(props) {
  return (
    <div>
       <div className="img-box col-lg-4 col-8">
          <img src="./images/temp.jpg" alt="image"  />
          <div className="transparent-box">
            <div className="caption">
              <p>{props.name}</p>
              <p className="opacity-low">{props.desc}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

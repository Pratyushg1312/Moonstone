import React from 'react'
import PastEventComponent from './PastEventComponent'
import {Data} from './PreventComponentData';
import './PastEvents.css'
export default function PastEvents() {
    return (
        <>
            <div className='container text-center my-5' style={{ color: "white" }}>
                <div>
                    <h1 >Past Events</h1>
                    <p style={{ textDecoration: "underline" }}>Glimpses of Our Events</p>
                </div>
                <div className='row'>
                    <div className="gallery-image ">
                        {Data.map((elem)=>{

                            return <PastEventComponent name={elem.name} desc={elem.desc} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

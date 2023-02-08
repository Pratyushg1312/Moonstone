import React from 'react'
import { Data } from './Data'
export default function UpcomingEventComp(props) {
    let idx=props.idx;
    return (
        <>
       
            <div className="col-md-5 col-8 m-3"  style={{backgroundColor:"#4d6c63"}}>
            <div className='text-center' style={{backgroundColor:"#ffdbaf"}}>
                <h2 style={{textshadow:"5px"}}>{Data[idx].title}</h2>
            </div>
            <div>
                <p style={{color:"#b6c9f6" }}>{Data[idx].desc}</p>
             </div>
             <div className='d-flex mb-2' style={{color:"#b6c9f6" }}>
             <div className='col-6'>09-02-2023</div>
             <div className='col-6'>Thursday</div>
             </div>

            </div>
            
        </>
    )
}

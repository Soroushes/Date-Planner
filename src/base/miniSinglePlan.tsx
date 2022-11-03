import {PlansInt} from "../interfaces/plansInt";
import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import timeDuration from "../helpers/timeDuration";
const colors : String[] = ['#f3afc6' , '#f9d58b' , "#97c08b"] ;
const MiniSinglePlan : React.FC<PlansInt> = (props)=>{
    const color : any = colors[Math.floor(Math.random()*colors.length)] ;
    return(
        <div style={{backgroundColor : color}} className="w-100 p-3 my-3 rounded-4">
           <div className="d-flex gap-4  align-items-center mb-2">
               <h4 className={'m-0 fw-bold text-dark'} style={{fontSize : 17}}>{props.name}</h4>
               <span style={{fontSize : 15 , color : "#555"}}>{timeDuration(props.startTime.minutes ,props.startTime.hours , props.endTime.minutes , props.endTime.hours )}</span>
           </div>
            <div className="d-flex gap-4  align-items-center">
                <p className={'m-0 d-flex align-items-center'} style={{fontSize : 17 , color : "#555"}}><LocationOnIcon className={'me-2'} sx={{fontSize : 19}}/>{props.location}</p>
                <span className={'d-flex align-items-center'} style={{fontSize : 15 , color : "#555"}}>
                    <AccessTimeFilledIcon className={'me-2'} sx={{fontSize : 17}}/>
                    {props.startTime.hours>=10 ? props.startTime.hours : '0'+props.startTime.hours}:{props.startTime.minutes>=10 ? props.startTime.minutes : '0'+props.startTime.minutes }

                    {' '}- {props.endTime.hours >=10 ?  props.endTime.hours : '0'+props.endTime.hours}:{props.endTime.minutes >= 10 ? props.endTime.minutes : '0'+props.endTime.minutes}
                </span>
            </div>
        </div>
    )
}
export default MiniSinglePlan ;
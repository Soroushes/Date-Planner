import * as React from "react";
import {useEffect, useState} from "react";
// @ts-ignore
import Calendar from 'react-calendar' ;
import 'react-calendar/dist/Calendar.css';
import {Container, Grid} from "@mui/material";
import ShowPlan from "../containers/ShowPlan";
import {useDispatch, useSelector} from "react-redux";
import {SELECT_DATE} from "../redux/slices/selectedDate";
import BottomNav from "../containers/bottomNav";
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const Main : React.FC = ()=>{
    const dispatcher = useDispatch() ;
    const {date} = useSelector((state : any) => state.selectedDate) ;
    const [value, setValue] = useState(date || new Date());
    const day : number = value.getDate();
    const month : string = monthNames[value.getMonth()] ;
    const year : number = value.getFullYear();
    const fullDate : string = day+' '+ month+' '+ year ;
    useEffect(()=>{
        dispatcher(SELECT_DATE({showDate : fullDate , date : value})) ;
        },[value])
    return(
        <Container className={'h-100'} disableGutters maxWidth={false}>
            <Grid className={'h-100'} container alignContent={'space-between'}>
                <Grid item xs={12}>
                    <Container className={'h-100'} disableGutters maxWidth={'sm'}>
                        <Calendar defaultView={'month'} className={'w-100'} onChange={setValue} value={value} />
                    </Container>
                </Grid>
                <Grid item xs={12}>
                     <ShowPlan/>
                    <BottomNav/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Main ;
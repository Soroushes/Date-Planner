import {Button, Container, Grid, TextField} from "@mui/material";
import React, {ChangeEvent, useState} from "react";
import {LocalizationProvider, TimePicker} from "@mui/x-date-pickers";
import dayjs, {Dayjs} from "dayjs";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {useDispatch, useSelector} from "react-redux";
import {ADD, EDIT} from "../redux/slices/PlansSlice";
import {Link, useNavigate, useParams} from "react-router-dom";
import {PlansInt} from "../interfaces/plansInt";
const AddPlans = ()=>{
    const {id} = useParams() ;
    const navigator = useNavigate() ;
    const plans : PlansInt[] = useSelector((state : any)=>state.plans);
    const plan : PlansInt | undefined = id ? plans.find((plan:PlansInt)=>Number(plan.id)===Number((id))) : undefined;
    const [startTime , setStartTime] = useState<Dayjs | any>('') ;
    const [endTime , setEndTime] = useState<Dayjs | any>('') ;
    const [name , setName] = useState<String>(plan?.name || '') ;
    const [location , setLocation] = useState<String>(plan?.location || '') ;
    const [description , setDescription] = useState<String>(plan?.description || '') ;
    const dispatcher = useDispatch() ;
    const {showDate} = useSelector((state : any) => state.selectedDate) ;
    const editBtn = ()=>{
        const edited = plans.map((plan)=>{
            if (Number(plan.id)===Number(id)){
                return{
                    id ,
                    date : showDate,
                    name,
                    location ,
                    description ,
                    startTime : {hours : startTime.$H , minutes: startTime.$m},
                    endTime : {hours : endTime.$H , minutes : endTime.$m}
                }
            }else return plan ;
        })
        dispatcher(EDIT(edited)) ;
        navigator('/view/'+id) ;
    }
    const clicked = (edit : boolean)=>{
        if (endTime.$H - startTime.$H < 0 || ((endTime.$m - startTime.$m< 0)&&endTime.$H===startTime.$H)){
            alert('wrong start and end time') ;
            return
        }
        if (!name || !endTime || !startTime){
            alert('fill the inputs !') ;
            return;
        }
        if (edit){
            editBtn() ;
            return;
        };
        dispatcher(ADD({
            id : Math.floor(Math.random()*100000) ,
            date : showDate,
            name,
            location ,
            description ,
            startTime : {hours : startTime.$H , minutes: startTime.$m},
            endTime : {hours : endTime.$H , minutes : endTime.$m}
        }))
        setStartTime(dayjs('2022-01-01T00:00:00.000Z'));
        setEndTime(dayjs('2022-01-01T00:00:00.000Z'));
        setName('') ;
        setDescription('') ;
        setLocation('') ;
        navigator('/') ;
    }
    return(
        <div className={'w-100 bg-white'} style={{height : (plan ? '100vh' : '33vh') , overflowY : "scroll"}}>
            <Container className={'bg-white'} maxWidth={'md'}>
                <Grid container columnSpacing={4} justifyContent={'space-between'}>
                    <Grid className={'mt-4'} item xs={12} md={6}>
                        <TextField value={name} onChange={(e : ChangeEvent<HTMLInputElement>)=>{setName(e.target.value)}} className={'w-100'} id="standard-basic" label="your plan" variant="outlined" />
                    </Grid>
                    <Grid className={'mt-4'} item xs={12} md={6}>
                        <TextField value={location} onChange={(e : ChangeEvent<HTMLInputElement>)=>{setLocation(e.target.value)}} className={'w-100'} id="standard-basic" label="location" variant="outlined" />
                    </Grid>
                    <Grid className={'mt-4'} item xs={12} md={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                                className={'w-100'}
                                label="start Time"
                                value={startTime}
                                onChange={setStartTime}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid className={'mt-4'} item xs={12} md={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                                className={'w-100'}
                                label="start Time"
                                value={endTime}
                                onChange={setEndTime}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid className={'mt-4'} item xs={12}>
                        <TextField value={description} onChange={(e : ChangeEvent<HTMLInputElement>)=>{setDescription(e.target.value)}} className={'w-100'} id="standard-basic" label="description" variant="outlined" />
                    </Grid>
                    <Grid className={'my-4 text-center'} item xs={12}>
                        {
                            plan ? <Link to={'/view/'+id}><Button color={'secondary'} className={'mx-4'} variant="outlined">back</Button></Link> : ""
                        }
                        {
                            plan ? <Button className={'mx-4'} onClick={clicked.bind(this , true)} variant="contained">Edit Plan</Button> :
                            <Button onClick={clicked.bind(this , false)} variant="contained">Add To Plans</Button>
                        }
                    </Grid>
                </Grid>
            </Container>
        </div>

    )
}
export default AddPlans ;
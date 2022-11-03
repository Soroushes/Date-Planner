import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {PlansInt} from "../interfaces/plansInt";
import {Container, Divider, Fab, Grid, Typography} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EditIcon from '@mui/icons-material/Edit';
import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {DELETE} from "../redux/slices/PlansSlice";
const View = ()=>{
    const {id} = useParams() ;
    console.log(id);
    const dispatcher = useDispatch() ;
    const plans : PlansInt[] = useSelector((state :any) => state.plans) ;
    const selectedPlan : PlansInt | undefined = plans.find((plan:PlansInt)=>Number(plan.id)===Number(id));
    console.log(plans , selectedPlan);
    const deletePlan = ()=>{
        dispatcher(DELETE(plans.findIndex((plan)=>plan.id===Number(id)))) ;
    }
    return(
        selectedPlan?
        <Container className={'pt-5'} maxWidth={'md'}>
            <Link to={'/'}><ArrowBackIosIcon className={'text-white'} sx={{fontSize : 60}}/></Link>
            <h1 className={'text-white py-4'}>{selectedPlan?.name}</h1>
            <div className={'position-fixed bottom-0 start-0 w-100 bg-white'} style={{height : '60vh'}}>
                <Container className={'py-4 position-relative h-100'} maxWidth={'md'}>
                    <Link to={'/edit/'+id}>
                        <Fab sx={{bottom : 40 , right : 20}} className={'position-absolute'} aria-label="add">
                            <EditIcon fontSize={'large'}/>
                        </Fab>
                    </Link>
                    <Link to={'/'}>
                        <Fab onClick={deletePlan} sx={{bottom : 40 , left: 20}} className={'position-absolute'} aria-label="add">
                            <DeleteForeverIcon sx={{color : "red"}} fontSize={'large'}/>
                        </Fab>
                    </Link>
                    <Grid container justifyContent={'space-between border-bottom'}>
                        <Grid className={'mb-4'} item xs={6} md={4}>
                            <h2 style={{fontSize : 15}}>{selectedPlan.date}</h2>
                            <p style={{fontSize : 15}} className={'text-muted'}>date</p>
                        </Grid>
                        <Grid className={'mb-4'} item xs={6} md={4}>
                            <div className={'text-center mb-1'}>
                                {selectedPlan.startTime.hours>=10 ? selectedPlan.startTime.hours : '0'+selectedPlan.startTime.hours}:{selectedPlan.startTime.minutes>=10 ? selectedPlan.startTime.minutes : '0'+selectedPlan.startTime.minutes }
                                {' '}- {selectedPlan.endTime.hours >=10 ?  selectedPlan.endTime.hours : '0'+selectedPlan.endTime.hours}:{selectedPlan.endTime.minutes >= 10 ? selectedPlan.endTime.minutes : '0'+selectedPlan.endTime.minutes}
                            </div>
                            <p style={{fontSize : 15}} className={'text-center text-muted'}>Time</p>
                        </Grid>
                        <Grid className={'mb-4'} item xs={12} md={4}>
                            <h4 style={{fontSize : 15}} className={'text-center text-md-center'}>{selectedPlan.location}</h4>
                            <p style={{fontSize : 15}} className={'text-center text-md-center text-muted'} >Location</p>
                        </Grid>
                        <Grid className={'border-top pt-4'}  item xs={12}>
                            <p style={{fontSize : 15}} className={'text-muted'} >Description</p>
                            <Typography style={{fontSize : 15}}>{selectedPlan.description}</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Container> : <h1 className={'text-white text-center'}>404 NotFound</h1>
    )
}
export default View ;
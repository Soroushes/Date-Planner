import React from "react";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
const NotFound : React.FC= ()=>{
    return(
        <>
            <h1 className={'text-white text-center py-5'}>404 not found</h1>
            <Link to={'/'}>
                <div className={'text-center'}>
                    <Button color={'secondary'} className={'mx-4'} variant="contained">Back to Home</Button>
                </div>
            </Link>
        </>

    )
}
export default NotFound ;

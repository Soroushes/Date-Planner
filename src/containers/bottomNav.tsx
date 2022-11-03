import * as React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import AddIcon from '@mui/icons-material/Add';
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';

const BottomNav : React.FC= ()=>{
    const {pathname} = useLocation() ;
    const [value, setValue] = useState(pathname);
    const navigator = useNavigate() ;
    useEffect(()=>{
        setValue(pathname) ;
    },[pathname])
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        if (newValue!==value){
            navigator(newValue);
        }
    };
    return (
            <BottomNavigation className={'position-fixed start-0 bottom-0'} sx={{ width: '100%' }} value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Home"
                    value="/"
                    icon={<HomeTwoToneIcon/>}
                />
                <BottomNavigationAction
                    label="Add"
                    value="/new"
                    icon={<AddIcon/>}
                />
            </BottomNavigation>
    );
}
export default BottomNav ;
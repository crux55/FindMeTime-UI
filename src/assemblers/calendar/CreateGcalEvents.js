import { useLocation } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import CreateGcalEvents from '../../hooks/gcalUtils'

function CreateGcalEventsPage(){
    const location = useLocation()
    // useEffect(() => {
    //     createEvent(location.state)
    // }, []);

    return(
        <CreateGcalEvents props={location}/>
    )
}

export default CreateGcalEventsPage
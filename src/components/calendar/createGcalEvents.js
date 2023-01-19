import { useLocation } from "react-router-dom";
import CreateGcalEvents from '../../utils/gcalUtils'

function CreateGcalEventsPage(){
    const location = useLocation()

    return(
        <CreateGcalEvents props={location}/>
    )
}

export default CreateGcalEventsPage
import {Dayjs} from "dayjs";

interface time {
    hours : number ,
    minutes : number
}
export interface PlansInt {
    fullStartTime : Dayjs ,
    fullEndTime : Dayjs,
    id : number,
    date : string,
    name : string ,
    location : string ,
    description : string,
    startTime : time ,
    endTime :time
}

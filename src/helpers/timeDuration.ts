const timeDuration = (startMin: number , startHour : number , endMin : number , endHour : number)=>{
    const min : number = (endMin - startMin) < 0 ? 60+(endMin - startMin) : (endMin - startMin) ;
    const hourMinus : boolean = (endMin - startMin) < 0 ;
    let hour : number = hourMinus ? (endHour-startHour)-1 : (endHour-startHour) ;
    return hour ? `${hour} hours and ${min} minutes` : `${min} minutes` ;

}
export default timeDuration;
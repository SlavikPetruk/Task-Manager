const Display = ({time}) => {
    return (
        <div className="watch__display">
            <h1 className="h__h1">
                {/* {(time.h >= 0) ? time.h : "0" + time.h}&nbsp;:&nbsp;
                {(time.m  >= 0) ? time.m : "0" + time.m}&nbsp;:&nbsp;
                {(time.s  >= 0) ? time.s : "0" + time.s}&nbsp;:&nbsp;
                {(time.ms  >= 0) ? time.ms : "0" + time.ms} */}
                {/* </h1> */}
            
            
            <span>{(time.h >= 0) ? time.h : "0" + time.h} :</span>
            <span>{(time.m  >= 0) ? time.m : "0" + time.m} :</span>
            <span>{(time.s  >= 0) ? time.s : "0" + time.s} :</span>
            <span>{(time.ms  >= 0) ? time.ms : "0" + time.ms}</span>
        </h1>
        </div>
    )
}

export default Display

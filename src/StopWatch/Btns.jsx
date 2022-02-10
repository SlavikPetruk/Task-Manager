import React from 'react'

const Btns = ({start, status, stop, reset}) => {
    return (
        <div>
            { ( status === 0 ) ?
                <>
                    <button 
                        className="stopwatch-btn stopwatch-btn-gre"
                        onClick={start}
                    > Start </button>           
                </>
            :
                null
            }

            { ( status === 1 ) ?
            <> 
                <button 
                    className="stopwatch-btn stopwatch-btn-red"
                    onClick={stop}
                > Stop </button>
                <button 
                    className="stopwatch-btn stopwatch-btn-yel"
                    onClick={reset}
                > Reset </button>
            </>
            :
                null
            }

            { ( status === 2 ) ?
            <> 
                <button 
                    className="stopwatch-btn stopwatch-btn-red"
                    onClick={start}
                > Resume </button>
                <button 
                    className="stopwatch-btn stopwatch-btn-yel"
                    onClick={reset}
                > Reset </button>
            </>
            :
                null
            }
            
        </div>
    )
}

export default Btns

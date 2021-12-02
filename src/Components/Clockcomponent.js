import React from 'react'
import { useState,useEffect } from 'react';
function Clockcomponent() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
      }, []);
    return (
        <div style={{display:'flex'}}>
                 <h4 style={{marginRight:"20px"}}>
                {' '}
                {dateState.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}
            </h4>
            <h4>
                {dateState.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                })}
            </h4>
        </div>
    )
}

export default Clockcomponent

import React, { useState } from 'react'
import Countup from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import '../counter/CounterUp.css'

const CounterUp = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <>
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            {/* <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(true)}> this for one time counter */}

                <div className='counter-animation'>
                    <h1>
                        {counterOn && <Countup start={0} end={100} duration={2} delay={0} />}m
                        
                    </h1>
                    <h1>
                        {counterOn && <Countup start={0} end={1000} duration={2} delay={0} />}
                        
                    </h1>
                    <h1>
                        {counterOn && <Countup start={0} end={10110} duration={2} delay={0} />}k
                        
                    </h1>
                </div>

            </ScrollTrigger>

        </>
    )
}

export default CounterUp
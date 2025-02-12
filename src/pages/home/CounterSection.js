import React, {useState} from "react";

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Counter = () => {

    const [state, setState] = useState(true);

    const counters = [
        {
            countNum: 25,
            countTitle: 'Years of Excellence',
            counterSubtext: 'ESTABLISHED SINCE',
        },
        {
            countNum: 1500,
            countTitle: 'Students Enrolled',
            counterSubtext: 'CURRENT LEARNERS',
        },
        {
            countNum: 200,
            countTitle: 'Dedicated Faculty',
            counterSubtext: 'EXPERT TEACHERS',
        },
        {
            countNum: 100,
            countTitle: 'Awards Won',
            counterSubtext: 'RECOGNITIONS',
        },
    ];

    return (
        <div className="count__area pb---110">
            <div className="container count__width">
                <div className="row">
                    <div className="col-xxl-11 col-xl-11 col-lg-11 offset-lg-1">
                        {counters &&
                            <div className="row">
                                {counters.map((counter, num) => (
                                    <div key={num}
                                         className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 wow animate__fadeInUp"
                                         data-wow-duration="0.3s">
                                        <div className="count__content">
                                            <p className="count__content--paragraph">{counter.countTitle}</p>
                                            <h3 className="count__content--title-1 counter">
                                                <CountUp start={state ? 0 : counter.countNum} end={counter.countNum}
                                                         duration={10} onEnd={() => setState(false)}/>
                                                {({countUpRef, start}) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef}/>
                                                    </VisibilitySensor>
                                                )}
                                            </h3>
                                            <p className="count__content--paragraph2">{counter.counterSubtext}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Counter;
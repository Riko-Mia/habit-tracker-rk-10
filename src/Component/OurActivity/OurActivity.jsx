import React from 'react';

const OurActivity = () => {
    return (
        <div>
            {/* import CountUp from './CountUp' */}

                <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                />
        </div>
    );
};

export default OurActivity;
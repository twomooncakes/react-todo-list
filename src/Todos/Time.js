import { useState, useEffect } from "react";

function TimeDisplay() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer);
        }
    
    });

    return (
        <span>
            {date.toLocaleString('lt')}
        </span>
    );
}

export default TimeDisplay;
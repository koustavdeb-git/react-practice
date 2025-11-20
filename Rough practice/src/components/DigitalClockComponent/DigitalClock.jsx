import { React, useState, useEffect } from 'react'
import './DigitalClock.css'

const DigitalClock = () => {
    const [timeind, setTimeind] = useState(new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Singapore" }))
    const [time, setTime] = useState(new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata" }))

    useEffect(() => {
        setInterval(() => {
            setTimeind(new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata" }))
            setTime(new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Singapore" }))
        }, 1000);

    }, [])

    return (
        <div className='clock-style'>
            <div>
                <span>IST Time -</span> {timeind}

            </div>
            <div>
                <span>Singapore Time -</span> {time}

            </div>

        </div>
    )
}

export default DigitalClock

"use client";

import React, { useEffect, useState } from 'react'

export default function TopBarTime() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const formatter = new Intl.DateTimeFormat("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        })

        const updateTime = () => {
            setTime(formatter.format(new Date()).replaceAll(",", ""));
        }

        updateTime();
        const interval = setInterval(updateTime, 1000 * 30);

        return () => clearInterval(interval);
    }, [])

    return (
        <h2 className='text-white font-medium'>
            {time}
        </h2>
    )
}

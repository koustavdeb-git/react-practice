import React from 'react'
import { useState, useEffect } from 'react'

const HooksPractice = () => {
    const [count, setcount] = useState(0)
    const increase = () => {
        setcount(count+1)
    }

    useEffect(() => {
      alert("Value is increased")
    
      return () => {
      }
    }, [count])
    
    return (
        <div>
            <div>
                My count is - ${count}
            </div>
            <button className='btn btn-primary' onClick={increase}>Increase count</button>
        </div>
    )
}

export default HooksPractice

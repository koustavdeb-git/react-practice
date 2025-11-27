import {React, useState} from 'react'

const AsyncFetch = () => {
    const [result, setresult] = useState(null);
    async function dummycall() {
        const url = 'https://dummyjson.com/posts/add';
        const body = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: 'I am creating my record- Koustav',
                userId: 5
            })
        }

        const output = await fetch(url, body);
        const data = await output.json();
        
        console.log(data);

        setresult(data);
        

    }

    return (
        <div>
            <h3 className='label label-primary'>AsyncFetch</h3>
            <button onClick={dummycall} className='btn btn-success mt-3'>Create record</button>
            
            {result && 
            (<pre className='mt-3'>
                {JSON.stringify(result, null, 2)}
            </pre>)}
        </div>
        
    )
}

export default AsyncFetch
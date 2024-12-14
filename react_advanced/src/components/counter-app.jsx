import { useState } from 'react';
import { useConsoleLogHook } from './CustomHooks/useCustom-hook';

const CounterApp = () => {
    const [count, setCount] = useState(0);
    useConsoleLogHook(count);

    const handleClick = () => {
        setCount(prevCount => prevCount + 1);

    }
    return(
        <div>
            <h1>Custom hook</h1>
            <button className='bg-blue-500 text-white px-3 py-2 rounded ' onClick={handleClick}>Click to Count</button>
            <h1>{count}</h1>
        </div>
    )

}
export {CounterApp};
import { useEffect } from 'react'

const useConsoleLogHook = (counter) => {
    useEffect(() => {
        console.log(`Value of counter is: ${counter}`);
    },[counter]);
}
export {useConsoleLogHook};

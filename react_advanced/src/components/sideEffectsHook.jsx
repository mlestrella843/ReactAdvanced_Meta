import { useEffect, useState} from "react";

function HookUSeEffect(){
    const [toggle, setToggle] = useState(false);

    const clickHandler = () => {
        setToggle(!toggle);
    }

    useEffect( () => {
        document.title = toggle ? "Welcome to the Lemon" : "Using the useEffect hook"
    }, [toggle]);

    return(
        <div>
            <h1>Using the useEffect Hook</h1>
            <button onClick={clickHandler}>
                Toggle Message
            </button>
            {toggle && <h2>"Welcome to the Lemon"</h2>}
        </div>
    )
}
export {HookUSeEffect};
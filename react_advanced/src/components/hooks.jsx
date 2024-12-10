import { useState } from "react";

const GreetClients = () => {

    const [greeting, setGreeting] = useState({ user: "Maria", greet:"Hello guys!"});
    console.log(greeting, setGreeting);

    function updatedGreeting (){
        const newGreeting = {...greeting};
        newGreeting.greet = "Hi, how is going?";
        setGreeting(newGreeting);
    }
    return(
        <div>  
            <button className="bg-blue-300 text-white rounded border-2 border-blue-600 px-3 py-2" onClick={updatedGreeting}>Update your Greetings</button>
            <h1>{greeting.greet}</h1>
            <h2>{greeting.user}</h2>
        </div>
    );
};
export {GreetClients};
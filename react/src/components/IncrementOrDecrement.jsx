import { useState } from "react";

function CounterApp(){
    const[count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1);

    }

    const decrement = ()=>{
        setCount(count -1);

    }

    return (
        <>
        <h1 class = "p-5 m-4 caret-amber-300">Count ={count}</h1>
        <button type= "button" onClick={increment} class="m-1.5 p-1.5 border-2">increment</button>
        <button type="button" onClick={decrement} class="m-1.5 p-1.5 border-2">decrement</button>
        </>
    )
}

export default CounterApp;
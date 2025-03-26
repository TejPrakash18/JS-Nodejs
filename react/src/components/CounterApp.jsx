
import {useState} from "react";

function Count(){
    const[count, setCount] = useState(0);
    const countClicks = () =>{
        setCount(count +1)
    };

    return(
        <div>
        <h1>button clicked {count} times</h1>
        <button onClick = {countClicks} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1
         focus:ring-blue-300 font-medium z-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
         focus:outline-none dark:focus:ring-blue-800">click me</button>

        </div>
    )
}

export default Count;
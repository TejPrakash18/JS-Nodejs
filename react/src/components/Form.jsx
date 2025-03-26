import { useState } from "react";

function Form(){

    const[text, setText] = useState('');

    const handleChange = (event)=>{
        setText(event.target.value);
    };

    return(
        <div>
            <h1>text : {text}</h1>
            <input type="text" class ="focus: ring-2" value={text} onChange={handleChange} />
        </div>
    )
}

export default Form;
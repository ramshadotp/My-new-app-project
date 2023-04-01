import React, { useState } from 'react';

const Myapp = () => {

    const [cur, start] = useState("")
    const [b, c] = useState(0)
    const [y,count] = useState(0)

const str = (x) => {
    const a = x.target.value;
    start(a);
    c(a.split(" ").join("").length)
    count(a.trim().split(" ").length)
}    

const upper = () => {
    start(cur.toUpperCase())
}

const lower = () => {
    start(cur.toLowerCase())
}

return(

    <div>
    <input type="text" placeholder='Enter the Text' onChange={str} value={cur}/>
    <br/>
    <button onClick={upper}>To Upper Case</button>
    <button onClick={lower}>To Lower Case</button>
    <p>Length : {b}</p>
    <p>Words : {y}</p>
    </div>
)
}
export default Myapp
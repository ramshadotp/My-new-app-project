import React from "react";

function Contact (props){

    var nm = props.name.toUpperCase(); 
    var st = {color:"",padding:10,border:"solid 1px gray"};

    return(

        <div style={props.st}>
            <p>{props.id[0]}</p>
            <h1>{nm} Contact Page</h1>
            <label>Email Address</label>
            <input type="text" />
            <br/>
            <label>Message</label>
            <textarea></textarea>
            <button>Send</button>
        </div> 
    )
}

export default Contact;
import React from "react";
import "./form.css";

function Form(props) {
    return (
        <form className="form" onSubmit={props.getData}>
            <div className="request">
                <input className="input" type="text" name="url" placeholder="http://api.url.here" />
               
                <input className= "send" type="submit" value="Go!"/>
            </div>
            <div className="methods">
                <button className="method" name ="GET">GET</button>
                <button className="method" name = "POST">POST</button>
                <button className="method" name = "PUT">PUT</button>
                <button className="method" name = "DELETE">DELETE</button>

                <textarea name="body"  ></textarea>
            </div>
        </form>
    )
}
export default Form;
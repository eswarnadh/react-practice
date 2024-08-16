import React from "react"
import ReactDOM from "react-dom/client"

const Parent =() =>(
<div id="parent">
    <div id="child">
        <h1>Namaste React</h1>
    </div>
</div>
);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<Parent/>);
import React from "react";
import ReactDOM from "react-dom/client";
  

//  Creating elements using JSX 
const heading = (  
  <h1 id="title" key="h3" tabIndex="" className="">
    Namaste React
  </h1>
); // this is a react variable

const Heading2 = () => (
    <h1 id="title" key="h3" tabIndex="" className="">
      Namaste React 2nd times
    </h1>
  ); //this is a fxnal comp
  

// React Component
// Functional component (new) && class component (old)
// conventionally name of the fxnl comp starts with capital letter

const HeaderComponent= () => {
    return(
        <div>
            {heading}
            <h1>Namaste React using fxnl comp</h1>
        </div> 
    );
};

const HeaderComponent2 =()=> (
        <div>
            <Heading2/>
            <h2>Namaste React using fxnl comp</h2>
        </div> 
    );







const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
root.render(<HeaderComponent2/>);

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";  //or   "./components/Header.js"
import Footer from "./components/Footer"; 
import Body from "./components/Body";  


const AppLayout = () => {
  return(
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
root.render(<AppLayout/>);

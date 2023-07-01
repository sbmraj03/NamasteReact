const heading=React.createElement("h1",{id:"title 1"},"Hello Ji!");
    const heading2=React.createElement("h1",{id:"title 2"},"kaise ho aap sab");

    const container=React.createElement("div",{id:"container"},[heading,heading2]);

    const root = ReactDOM.createRoot(document.getElementById("root"));

    //passing a react element inside the root
    root.render(container);
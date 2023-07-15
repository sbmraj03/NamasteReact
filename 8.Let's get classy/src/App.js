import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";  //or   "./components/Header.js"
import Footer from "./components/Footer"; 
import Body from "./components/Body";  
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
// import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";


const AppLayout = () => {
  //all the children will go to the Outlet
  return(
    <React.Fragment>
      <Header />
      <Outlet /> 
      <Footer />
    </React.Fragment>
  );
};

const appRouter= createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [  //Now About is a children of  appLayout
     {
        path: "/about",   //slash means from the root that is after localhost:1234
        element: <About />,
        children: [
          {
            path: "profile", // parentPath/{path} ==> localhost:1234/about/profile
            element: <Profile></Profile>
          }
        ]
      },
    
      {
        path: "/",
        element: <Body />,
      }, 
      
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/restaurant/:id",
      //   element: <RestaurantMenu />,
      // }
    ],
  },
  
])



const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
root.render(<RouterProvider router= {appRouter} />);

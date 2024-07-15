import React from "react";
import ReactDOM  from "react-dom/client";

const parent = React.createElement("div",{id: "heading"},
 [
 React.createElement("div",{id: "child1"},
 [React.createElement("h1",{},"I am Astitva Gupta "),
 React.createElement("h2",{},"I am Frontend Developer")])
 ],
 React.createElement("div",{id: "child2"},
 [React.createElement("h1",{},"I am Astitva Gupta"),
 React.createElement("h2",{},"I am Frontend Developer")])
 );

 const rootParent = ReactDOM.createRoot(document.getElementById("root"));
 rootParent.render(parent)
 console.log(parent)


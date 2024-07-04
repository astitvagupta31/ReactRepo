// ########## Lecture-1 ########## (Inception/Intro)

/* 
Note ::    createElement("Tag",{"Attributes to Tags as object"},"Content/(Childrens)"); --> It creates a Javascript object 
           ReactElement=(Object) => HTML (Browser Understands) => rendering into the DOM it convert it into a html and puts up in to a DOM.
Note ::    createElement("Tag",{"Attributes to Tags as object"},"(This can be either a single child (Childern) or Array of different children)");    
           console.log(heading)   --> It will give the object which contains (props)
           render() : it replaces (React Element)/Javascript Object to html and putting it in the root (DOM) | It is replacing what is existing inside the root <div id="root"></div> 


--> Code : Creating h1 element inside react and render it on the page

 const heading = React.createElement("h1", {id: "heading"}, "Hello Astitva");
 const root = ReactDOM.createRoot(document.getElementById("root"))
 root.render(heading);

      --> Code : Creating Nested elements inside react and render it on the page as Html 

    <div id="parent">
        <div id="child">
             <h1> I am Astitva Gupta</h1>
        </div>
    </div>


 const parent = React.createElement("div",{id: "heading"},
 React.createElement("div",{id: "child"},
 React.createElement("h1",{},"I am Astitva Gupta")));

 const rootParent = ReactDOM.createRoot(document.getElementById("root"));
 rootParent.render(parent)
 console.log(parent)


--> Code : Creating Nested elements inside react and render it on the page as Html 
    
     <div id="parent">
        <div id="child">
             <h1> I am Astitva Gupta</h1>
             <h2> I am Front End Developer</h2>
        </div>
    </div>


 const parent = React.createElement("div",{id: "heading"},
 React.createElement("div",{id: "child"},
 [React.createElement("h1",{},"I am Astitva Gupta"),
 React.createElement("h2",{},"I am Frontend Developer")]));

 const rootParent = ReactDOM.createRoot(document.getElementById("root"));
 rootParent.render(parent)
 console.log(parent)


        
-->  Code : Creating Nested elements inside react and render it on the page as Html 
    <div id="parent">
        <div id="child1">
             <h1> I am Astitva Gupta</h1>
             <h2> I am Front End Developer</h2>
        </div>

        <div id="child2">
             <h1> I am Astitva Gupta</h1>
             <h2> I am Front End Developer</h2>
        </div>
    </div>
   

 const parent = React.createElement("div",{id: "heading"},
 [
 React.createElement("div",{id: "child1"},
 [React.createElement("h1",{},"I am Astitva Gupta"),
 React.createElement("h2",{},"I am Frontend Developer")])
 ],
 React.createElement("div",{id: "child2"},
 [React.createElement("h1",{},"I am Astitva Gupta"),
 React.createElement("h2",{},"I am Frontend Developer")])
 );

 const rootParent = ReactDOM.createRoot(document.getElementById("root"));
 rootParent.render(parent)
 console.log(parent)

--> Note :: Above code is too untidy and messy for the simple html structure that's why we use "JSX" to create Tags */





//        ########## Lecture-2 ########## (Igniting Our App / Large Scale Application)

